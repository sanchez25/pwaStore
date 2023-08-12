<template>
  <!--<section itemprop="articleBody">-->
  <section>
    <v-container>
      <h2>{{ main.h2_1 }}</h2>
      <div class="points-block">
        <div class="points-block__item">
          <p>{{ main.step_1_title }}</p>
        </div>
        <div class="points-block__gray">
          <p>{{ main.step_1_description }}</p>
        </div>
        <div class="points-block__item two">
          <p>{{ main.step_2_title }}</p>
        </div>
        <div class="points-block__gray">
          <p>{{ main.step_2_description }}</p>
        </div>
        <div class="points-block__item last">
          <p>{{ main.step_3_title }}</p>
        </div>
        <div class="points-block__gray">
          <p>{{ main.step_3_description }}</p>
        </div>
      </div>
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
