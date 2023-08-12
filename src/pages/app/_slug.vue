<template>
  <!--<div id="application" itemscope itemtype="https://schema.org/SoftwareApplication" :itemid="`${base_url}${localePath(`/app/${app.slug}`)}`">-->
  <div id="application">
    <!--<meta itemprop="applicationCategory" content="EntertainmentApplication" />
    <link itemprop="author publisher" :href="`${base_url}${localePath('/', 'en')}`" />
    <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
      <meta itemprop="price" content="0">
      <meta itemprop="priceCurrency" content="USD">
    </span>-->
    <v-container>
      <header>
        <nav class="breadcrumbs">
          <a @click="goBack" aria-label="back" class="back"></a>
          <!--<ol itemscope itemtype="https://schema.org/BreadcrumbList" :itemid="`${base_url}${localePath(`/app/${app.slug}#breadcrumbs`)}`">-->
          <ol>
            <li>
              <nuxt-link :to="localePath('/')" rel="home" class="breadcrumb-link first">PWA-storage</nuxt-link>
            </li>
            <li class="breadcrumb-driver">/</li>
            <!--<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">-->
            <li>
              <!--<nuxt-link :to="localePath(`/categories/${app.categories[0].slug}`)" rel="tag" itemprop="item" class="breadcrumb-link">-->
              <nuxt-link :to="localePath(`/categories/${app.categories[0].slug}`)" rel="tag" class="breadcrumb-link">
                <!--<span itemprop="name">{{ app.categories[0].h1 }}</span>-->
                <span>{{ app.categories[0].h1 }}</span>
              </nuxt-link>
              <!--<meta itemprop="position" content="1">-->
            </li>
          </ol>
        </nav>
      </header>
      <AppCard :app="app"
               :install-pwa="installPwa"
               :open-pwa="openPwa"
               :open-website="openWebsite"
               :is_installed="is_installed"
               :is_installing="is_installing"
      />
      <AppContent :main_text="app.page.main_text"/>
      <AppFAQ :header="app.page.faq_header" :faqs="app.page.questions" :app_slug="app.slug"/>
      <AppRating :app="app"/>
      <Feedback :slug="app.slug" :app-name="app.page.h1"/>
      <section class="reviews-block">
        <ReviewItem
            v-for="review in app.reviews"
            :key="review.id"
            :review_data="review"
        />
      </section>
    </v-container>
    <Footer :categories="app.menu_categories"/>
  </div>
</template>

<script>
import AppCard from '~/components/App/AppCard'
import AppContent from '~/components/App/AppContent'
import AppFAQ from '~/components/App/AppFAQ'
import AppRating from '~/components/App/AppRating'
import Footer from '~/components/Footer/Footer'
import Feedback from '~/components/App/Feedback'
import ReviewItem from "~/components/App/ReviewItem";
export default {
  name: 'CategoryPage',
  components: {
    AppCard,
    AppContent,
    AppFAQ,
    AppRating,
    Footer,
    Feedback,
    ReviewItem
  },
  data() {
    return {
      base_url: process.env.BASE_URL,
      is_installing: false,
      is_installed: false,
    }
  },
  methods: {
    goBack() {
      this.$router.go( -1 )
    },
    installPwa() {
      this.$fireEvent("button_touch_download", this.app.page.h1, this.app.slug)

      if (this.deferredPrompt == null) {
        return
      }
      this.deferredPrompt.prompt();

      this.deferredPrompt.userChoice.then(choice => {
        if (choice.outcome === 'accepted') {
          this.$fireEvent("prompt_accepted", this.app.page.h1, this.app.slug)
          const ua = navigator.userAgent;
          if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
            this.is_installing = true
          } else {
            location.href = this.app.page.pwa_url;
          }
        } else {
          this.$fireEvent("prompt_declined", this.app.page.h1, this.app.slug)
        }
        this.deferredPrompt = null;
      })
    },
    openWebsite() {
      this.$fireEvent("button_touch_external", this.app.page.h1, this.app.slug)
      location.href = this.app.page.pwa_url;
    },
    openPwa() {
      this.$fireEvent("button_touch_open_pwa", this.app.page.h1, this.app.slug)
      location.href = this.app.page.pwa_url;
    }
  },
  computed: {
    manifest() {
      return `/api/applications/${this.app.slug}/manifest?lang=${this.$i18n.locale}`
    }
  },
  async asyncData({ $axios, i18n, params, store, error }) {
    try {
      const app_response = await $axios.get(`/api/applications/${params.slug}?lang=${i18n.locale}`);
      const app = app_response.data
      store.commit('categories/setMenuCategories', app.menu_categories)
      store.commit('locales/setLocales', app.locales)
      return {app};
    } catch (e) {
       error({ statusCode: 404 })
    }
  },
  head() {
    return {
      title: this.app.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.app.page.description
        },
        {
          name: 'robots',
          content: this.app.page.no_index_follow ? "noindex, follow" : "index, follow"
        },
      ],
      link: [
        {
          rel: "manifest",
          href: this.manifest
        },
        {
          rel: "apple-touch-icon",
          href: this.app.page.icon_192
        },
        ...this.$store.getters["locales/getHreflangBuilder"](`/app/${this.app.slug}`, this.$i18n.locale)
      ]
    }
  },
  created() {
    if (process.browser) {
      if ('serviceWorker' in window.navigator) {
        window.navigator.serviceWorker.register('/sw.js', {scope: `./${this.app.slug}`}).then(function (registration) {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function (error) {
          console.log('ServiceWorker registration failed: ', error);
        });
      } else {
        console.log('The current browser does not support service workers');
      }
    }
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', event => {
      console.log("before install prompt called")
      event.preventDefault();
      this.deferredPrompt = event
      this.$fireEvent("user_eligible_to_install_pwa", this.app.page.h1, this.app.slug)
    });
    window.addEventListener('appinstalled', (evt) => {
      console.log("appinstalled called");
      this.is_installing = false;
      this.is_installed = true;
    })
  }
}
</script>
<style>

</style>
