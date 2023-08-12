<template>
  <!--<v-card class="faq-card" tag="section" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">-->
  <v-card class="faq-card" tag="section">
    <!--<h3 class="faq-title"
        itemprop="name">-->
    <h3 class="faq-title">
      {{ faq_data.question }}
    </h3>
    <!--<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>{{ faq_data.answer }}</p>
      </div>
    </div>-->
    <div>
      <p>{{ faq_data.answer }}</p>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    faq_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style>
</style>
