<template>
  <!--<div id="category" itemscope itemtype="https://schema.org/ItemList"
       :itemid="`${base_url}${localePath('/categories/category#itemlist')}`">-->
  <div id="category">
    <v-container>
      <header>
        <nav class="breadcrumbs">
          <a @click="goBack" aria-label="back" class="back"></a>
          <!--<ol itemscope itemtype="https://schema.org/BreadcrumbList"
              :itemid="`${base_url}${localePath('/categories/category#breadcrumbs')}`">-->
          <ol>
            <li>
              <nuxt-link :to="localePath('/')" rel="home" class="breadcrumb-link first">PWA-storage</nuxt-link>
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
      <span v-if="category.applications.length === 0" class="no-results">No apps</span>
      <AppList v-else :apps="category.applications" :h1="category.page.h1"/>
      <CategoryText :main_text="category.page.main_text"/>
    </v-container>
    <FooterList :categories="category.menu_categories"/>
  </div>
</template>

<script>
import AppList from '~/components/Category/AppList'
import CategoryText from '~/components/Category/CategoryText'
import FooterList from '~/components/Footer/FooterList'

export default {
  name: 'CategoryPage',
  components: {
    CategoryText,
    AppList,
    FooterList
  },
  data() {
    return {
      base_url: process.env.BASE_URL
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  async asyncData({$axios, i18n, params, store, error}) {
    try {
      const category_response = await $axios.get(`/api/categories/${params.slug}?lang=${i18n.locale}`);
      const category = category_response.data
      store.commit('categories/setMenuCategories', category.menu_categories)
      store.commit('locales/setLocales', category.locales)
      return {category};
    } catch (e) {
       error({ statusCode: 404 })
    }
  },
  head() {
    return {
      title: this.category.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.page.description
        },
        {
          name: 'robots',
          content: this.category.page.no_index_follow ? "noindex, follow" : "index, follow"
        },
      ],
      link: [
        ...this.$store.getters["locales/getHreflangBuilder"](`/categories/${this.category.slug}`, this.$i18n.locale)
      ]
    }
  }
}
</script>
<style>

</style>
