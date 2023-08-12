<template>
  <v-col cols="6"
         md="3">
    <nuxt-link :to="localePath(`/categories/${this.category_data.slug}/`)">
      <!--<v-card itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem"
              tag="article"
              class="category-card">-->
      <v-card tag="article" class="category-card">
        <!--<meta itemprop="position" :content="index">-->
        <!--<h2 itemprop="name">{{ category_data.h1 }}</h2>-->
        <h2>{{ category_data.h1 }}</h2>
        <span>{{ category_data.apps_count }} apps</span>
        <!--<link itemprop="url" :href="localePath(`/categories/${this.category_data.slug}/`)">-->
      </v-card>
    </nuxt-link>
  </v-col>
</template>

<script>
export default {
  props: {
    category_data: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default() {
        return 0
      }
    }
  },
}
</script>
<style>

</style>
