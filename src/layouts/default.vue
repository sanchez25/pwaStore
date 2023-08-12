<template>
  <v-app>
    <v-navigation-drawer v-model="drawer"
                         fixed
                         temporary
                         class="nav-menu">
      <nav class="nav-list">
        <HeaderSearch/>
        <v-list-item class="nav-list__item">
          <nuxt-link :to="localePath('/')">Main</nuxt-link>
        </v-list-item>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-list-item-title>Category</v-list-item-title>
          </template>
          <v-list class="category-list">
            <v-list-item v-for="category in categories"
                         :key="category.slug">
              <nuxt-link :to="localePath(`/categories/${category.slug}`)">{{ category.h1 }}</nuxt-link>
            </v-list-item>
          </v-list>
        </v-list-group>
        <v-list-item class="nav-list__item">
          <nuxt-link :to="localePath('/categories')">Categories</nuxt-link>
        </v-list-item>
        <v-list-item class="nav-list__item">
          <nuxt-link :to="localePath('/about-us')">About US</nuxt-link>
        </v-list-item>
        <v-list-item class="nav-list__item">
          <nuxt-link :to="localePath('/privacy-policy')">Privacy Policy</nuxt-link>
        </v-list-item>
        <v-list-item class="nav-list__item">
          <nuxt-link :to="localePath('/cookie')">Cookie</nuxt-link>
        </v-list-item>
      </nav>
    </v-navigation-drawer>
    <div id="header">
      <v-container>
        <div class="header-block d-flex justify-space-between align-center">
          <v-app-bar-nav-icon
              class="menu-burger"
              @click.stop="drawer = !drawer"
              name="menu"
          />
          <nuxt-link :to="localePath('/')" class="header-logo">
            <img class="logo" width="24" height="24" alt="PWA logo" src="/images/logo.svg"/>
            <span>PWA storage</span>
          </nuxt-link>
          <LangSwitcher/>
        </div>
      </v-container>
    </div>

    <Nuxt/>

  </v-app>
</template>

<script>
import HeaderSearch from '~/components/Header/HeaderSearch'
import LangSwitcher from '~/components/lang/LangSwitcher'

export default {
  name: 'DefaultLayout',
  components: {
    HeaderSearch,
    LangSwitcher
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    categories() {
      return this.$store.state.categories.list
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  head() {
    return {
      htmlAttrs:{
        lang: `${this.$i18n.locale}`
      }
    }
  }
}
</script>
<style>

</style>
