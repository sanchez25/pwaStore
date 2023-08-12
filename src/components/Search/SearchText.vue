<template>
  <section class="categories-text">
    <div :v-html="main_text" />
  </section>
</template>

<script>
  export default {
    name: "SearchText",
    props: {
      main_text: {
        type: String,
        required: true
      }
    },
  }
</script>

<style scoped>

</style>