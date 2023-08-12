<template>
  <section class="categories">
    <!--<h1 itemprop="name">Categories</h1>-->
    <h1>Categories</h1>
    <v-row>
      <CategoryCardItem v-for="(category, index) in categories"
                        :key="category.slug"
                        :category_data="category"
                        :index="index + 1"/>
    </v-row>
  </section>
</template>

<script>
import CategoryCardItem from '~/components/Categories/CategoryCardItem'

export default {
  components: {
    CategoryCardItem
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>
<style>

</style>
