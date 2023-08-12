<template>
  <section class="contacts-block">
    <v-container>
      <h2>{{ main.h2_3 }}</h2>
      <!--<div itemprop="articleBody" class="main-text" v-html="main.text_block_2" />-->
      <div class="main-text" v-html="main.text_block_2" />
      <!--<div class="date-block">
        <div class="date-block__item">
          Modified: <time itemprop="dateModified" datetime="2022-05-27T17:55:30+01:00">2022-05-27</time>
        </div>
        <div class="date-block__item">
          Published: <time itemprop="datePublished" datetime="2022-05-27T17:55:30+01:00">2022-05-27</time>
        </div>
      </div>-->
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
