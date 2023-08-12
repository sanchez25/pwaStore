<template>
  <section class="main-section">
    <v-container>
      <!--<h1 itemprop="headline">{{ main.h1 }}</h1>-->
      <h1>{{ main.h1 }}</h1>
      <!--<img itemprop="image" class="main-img" width="328" height="180" :src="main.image" :alt="main.image_alt">-->
      <img class="main-img" width="328" height="180" :src="main.image" :alt="main.image_alt">
      <!--<div itemprop="articleBody" class="main-text" v-html="main.text_block_1" />-->
      <div class="main-text" v-html="main.text_block_1" />
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    main: {
      type: Object,
      required: true
    }
  },
}
</script>
<style>

</style>
