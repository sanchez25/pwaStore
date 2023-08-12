<template>
  <!--<v-card class="faq-card" tag="section" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">-->
  <v-card class="faq-card" tag="section">
    <!--<h3
      class="faq-title"
      itemprop="name"
    >{{ question_data.question }}</h3>-->
    <h3 class="faq-title">{{ question_data.question }}</h3>
    <!--<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>{{ question_data.answer }}</p>
      </div>
    </div>-->
    <div>
      <p>{{ question_data.answer }}</p>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    question_data: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>

</style>
