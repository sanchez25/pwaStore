<template>
  <!--<section itemscope itemtype="https://schema.org/FAQPage" :itemid="`${base_url}${localePath('/#faq')}`">-->
  <section>
    <v-container>
      <h2 id="faq">{{ h2 }}</h2>
      <FaqItem
        v-for="(question, index) in questions"
        :index="index"
        :question_data="question"
      />
    </v-container>
  </section>
</template>

<script>
import FaqItem from "@/components/Main/FaqItem";

export default {
  components: {
    FaqItem
  },
  props: {
    questions: {
      type: Array,
      required: true
    },
    h2: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      base_url: process.env.BASE_URL
    }
  },
}
</script>
<style>
</style>
