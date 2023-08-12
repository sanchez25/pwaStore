<template>
  <!--<div id="about" itemscope itemtype="https://schema.org/Article" :itemid="`${base_url}${localePath('/about-us#itemlist')}`">-->
  <div id="about">
    <v-container>
      <header>
        <nav class="breadcrumbs">
          <a @click="goBack" aria-label="back" class="back"></a>
          <ol>
            <li>
              <nuxt-link :to="localePath('/')" rel="home" class="breadcrumb-link first">PWA-storage</nuxt-link>
            </li>
          </ol>
        </nav>
      </header>
      <AboutText :main_text="about.main_text" :h1="about.h1" />
    </v-container>
    <FooterList :categories="about.menu_categories"/>
  </div>
</template>

<script>
import AboutText from '~/components/About/AboutText'
import FooterList from '~/components/Footer/FooterList'
export default {
  name: 'AboutUsPage',
  components: {
    AboutText,
    FooterList
  },
  data() {
    return {
      base_url: process.env.BASE_URL
    }
  },
  methods: {
    goBack() {
      this.$router.go( -1 )
    }
  },
  async asyncData({ $axios, i18n, store }) {
    const about_response = await $axios.get(`/api/static-pages/about?lang=${i18n.locale}`);
    const about = about_response.data
    store.commit('categories/setMenuCategories', about.menu_categories)
    store.commit('locales/setLocales', about.locales)
    return { about };
  },
  head() {
    return {
      title: this.about.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.about.description
        },
        {
          name: 'robots',
          content: this.about.no_index_follow ? "noindex, follow" : "index, follow"
        },
      ],
      link: [
        ...this.$store.getters["locales/getHreflangBuilder"](`/about-us`, this.$i18n.locale)
      ]
    }
  }
}
</script>

<style scoped>

</style>