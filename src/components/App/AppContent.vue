<template>
  <!--<section class="app-section" itemprop="text">-->
  <section class="app-section">
    <div v-html="main_text" class="text-app"/>
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
