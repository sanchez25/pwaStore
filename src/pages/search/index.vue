<template>
  <!--<div id="category" itemscope itemtype="https://schema.org/ItemList" :itemid="`${base_url}${localePath(`/categories/todo-replace-category#itemlist`)}`">-->
  <div id="category">
  <v-container>
      <header>
        <nav class="breadcrumbs">
          <a @click="goBack" aria-label="back" class="back"></a>
          <!--<ol itemscope itemtype="https://schema.org/BreadcrumbList" :itemid="`${base_url}${localePath(`/categories/todo-replace-category#breadcrumbs`)}`">-->
          <ol>
            <li>
              <nuxt-link to="/" rel="home" class="breadcrumb-link first">PWA-storage</nuxt-link>
            </li>
            <li class="breadcrumb-driver">/</li>
            <!--<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">-->
            <li>
              <!--<nuxt-link :to="localePath('/categories')" rel="tag" itemprop="item" class="breadcrumb-link">-->
              <nuxt-link :to="localePath('/categories')" rel="tag" class="breadcrumb-link">
                <!--<span itemprop="name">Categories</span>-->
                <span>Categories</span>
              </nuxt-link>
              <!--<meta itemprop="position" content="1">-->
            </li>
          </ol>
        </nav>
      </header>
      <span v-if="search.applications.length === 0" class="no-results">Nothing found for your request</span>
      <SearchList v-else :applications="search.applications" :h1="search.h1" />
      <SearchText :main_text="search.main_text" />
    </v-container>
    <FooterList :categories="search.menu_categories" />
  </div>
</template>

<script>
import SearchList from '~/components/Search/SearchList'
import SearchText from '~/components/Search/SearchText'
import FooterList from '~/components/Footer/FooterList'
export default {
  name: 'CategoryPage',
  components: {
    SearchList,
    SearchText,
    FooterList
  },
  data() {
    return {
      base_url: process.env.BASE_URL
    }
  },
  async asyncData({ $axios, i18n, route, store }) {
    const search_response = await $axios.get(`/api/search/apps?q=${route.query.q}&lang=${i18n.locale}`);
    const search = search_response.data
    store.commit('categories/setMenuCategories', search.menu_categories)
    store.commit('locales/setLocales', search.locales)
    return { search };
  },
  head() {
    return {
      title: this.search.title,
      meta: [
        {
          name: 'robots',
          content: this.search.no_index_follow ? "noindex, follow" : "index, follow"
        },
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.go( -1 )
    }
  }
}
</script>
<style>

</style>
