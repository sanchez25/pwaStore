<template>
  <!--<div id="categories" itemscope itemtype="https://schema.org/ItemList" :itemid="`${base_url}${localePath('/categories#itemlist')}`">-->
  <div id="categories">
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
      <CategoryCards :categories="categories_page.categories" />
<!--      <PopularGames />-->
<!--      <PopularGames />-->
      <CategoriesText :main_text="categories_page.main_text" />
    </v-container>
    <FooterList :categories="categories_page.menu_categories"/>
  </div>
</template>

<script>
import CategoryCards from '~/components/Categories/CategoryCards'
import PopularGames from '~/components/Categories/PopularGames'
import CategoriesText from '~/components/Categories/CategoriesText'
import FooterList from '~/components/Footer/FooterList'
export default {
  name: 'CategoriesPage',
  components: {
    CategoryCards,
    PopularGames,
    CategoriesText,
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
    const categories_page_response = await $axios.get(`/api/categories?lang=${i18n.locale}`);
    const categories_page = categories_page_response.data
    store.commit('categories/setMenuCategories', categories_page.menu_categories)
    store.commit('locales/setLocales', categories_page.locales)
    return { categories_page };
  },
  head() {
    return {
      title: this.categories_page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.categories_page.description
        },
        {
          name: 'robots',
          content: this.categories_page.no_index_follow ? "noindex, follow" : "index, follow"
        },
      ],
      link: [
        ...this.$store.getters["locales/getHreflangBuilder"](`/categories`, this.$i18n.locale)
      ]
    }
  }
}
</script>
<style>

</style>
