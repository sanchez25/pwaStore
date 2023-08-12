<template>
  <!--<section class="categories-text" itemprop="description">-->
  <section class="categories-text">
    <!--<h1 itemprop="name">{{ h1 }}</h1>-->
    <h1>{{ h1 }}</h1>
    <div v-html="main_text" />
  </section>
</template>

<script>
export default {
  name: "PrivacyText",
  props: {
    main_text: {
      type: String,
      required: true
    },
    h1: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>

</style>