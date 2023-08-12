<template>
  <!--<div id="cookie" itemscope itemtype="https://schema.org/Article" :itemid="`${base_url}${localePath('/cookie#itemlist')}`">-->
  <div id="cookie">
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
      <CookieText :main_text="cookie.main_text" :h1="cookie.h1" />
    </v-container>
    <FooterList :categories="cookie.menu_categories"/>
  </div>
</template>

<script>
import CookieText from '~/components/Cookie/CookieText'
import FooterList from '~/components/Footer/FooterList'
export default {
  name: 'CookiePage',
  components: {
    CookieText,
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
    const cookie_response = await $axios.get(`/api/static-pages/cookie?lang=${i18n.locale}`);
    const cookie = cookie_response.data
    store.commit('categories/setMenuCategories', cookie.menu_categories)
    store.commit('locales/setLocales', cookie.locales)
    return { cookie };
  },
  head() {
    return {
      title: this.cookie.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.cookie.description
        },
        {
          name: 'robots',
          content: this.cookie.no_index_follow ? "noindex, follow" : "index, follow"
        },
      ],
      link: [
        ...this.$store.getters["locales/getHreflangBuilder"](`/cookie`, this.$i18n.locale)
      ]
    }
  }
}
</script>

<style scoped>

</style>