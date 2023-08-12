<template>
  <!--<div id="main" itemscope itemtype="https://schema.org/Article" :itemid="localePath(`/#article`)">-->
  <div id="main">
    <!--<link itemprop="author publisher" :href="`${base_url}${localePath('/', 'en')}`">-->
    <!--<meta itemprop="mainEntityOfPage" :content="`${base_url}${localePath('/', 'en')}`">-->
    <Banner :main="main" />
    <Points :main="main" />
    <FAQ :questions="main.questions" :h2="main.h2_2" />
    <Contacts :main="main" />
    <Footer :categories="main.menu_categories"/>
  </div>
</template>

<script>
import Banner from '~/components/Main/Banner'
import Points from '~/components/Main/Points'
import FAQ from '~/components/Main/FAQ'
import Contacts from '~/components/Main/Contacts'
import Footer from '~/components/Footer/Footer'
export default {
  name: 'IndexPage',
  components: {
    Banner,
    Points,
    FAQ,
    Contacts,
    Footer
  },
  data() {
    return {
      base_url: process.env.BASE_URL
    }
  },
  async asyncData({ $axios, i18n, store }) {
    const main_response = await $axios.get(`/api/home?lang=${i18n.locale}`);
    const main = main_response.data
    store.commit('categories/setMenuCategories', main.menu_categories)
    store.commit('locales/setLocales', main.locales)
    return { main };
  },
  head() {
    return {
      title: this.main.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.main.description
        },
        {
          name: 'robots',
          content: this.main.no_index_follow ? "noindex, follow" : "index, follow"
        },
      ],
      link: [
        ...this.$store.getters["locales/getHreflangBuilder"](``, this.$i18n.locale)
      ]
    }
  }
}
</script>
<style>

</style>
