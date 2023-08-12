<template>
  <!--<section class="categories-text" itemprop="description">-->
  <section class="categories-text">
    <div v-html="main_text" />
  </section>
</template>

<script>
export default {
  props: {
    main_text: {
      type: String,
      required: true
    }
  },
}
</script>
<style>

</style>
