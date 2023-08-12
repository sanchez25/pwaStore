<template>
  <!--<div id="privacy" itemscope itemtype="https://schema.org/Article" :itemid="`${base_url}${localePath('/privacy-policy#itemlist')}`">-->
  <div id="privacy">
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
      <PrivacyText :main_text="privacy.main_text" :h1="privacy.h1" />
    </v-container>
    <FooterList :categories="privacy.menu_categories"/>
  </div>
</template>

<script>
import PrivacyText from '~/components/Privacy/PrivacyText'
import FooterList from '~/components/Footer/FooterList'
export default {
  name: 'PrivacyPolicyPage',
  components: {
    PrivacyText,
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
    const privacy_response = await $axios.get(`/api/static-pages/privacy-policy?lang=${i18n.locale}`);
    const privacy = privacy_response.data
    store.commit('categories/setMenuCategories', privacy.menu_categories)
    store.commit('locales/setLocales', privacy.locales)
    return { privacy };
  },
  head() {
    return {
      title: this.privacy.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.privacy.description
        },
        {
          name: 'robots',
          content: this.privacy.no_index_follow ? "noindex, follow" : "index, follow"
        },
      ],
      link: [
        ...this.$store.getters["locales/getHreflangBuilder"](`/privacy-policy`, this.$i18n.locale)
      ]
    }
  }
}
</script>

<style scoped>

</style>