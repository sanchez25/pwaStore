<template>
  <!--<section class="app-section" itemscope itemtype="https://schema.org/FAQPage"
           :itemid="`${base_url}${localePath(`/app/${app_slug}#faq`)}`">-->
  <section class="app-section">
    <h2>{{ header }}</h2>
    <AppFaqItem v-for="(faq, index) in faqs"
                :index="index"
                :faq_data="faq"/>
  </section>
</template>

<script>
import AppFaqItem from "@/components/App/AppFaqItem";

export default {
  components: {
    AppFaqItem
  },
  data() {
    return {
      base_url: process.env.BASE_URL
    }
  },
  props: {
    header: {
      type: String,
      required: true
    },
    faqs: {
      type: Array,
      required: true
    },
    app_slug: {
      type: String,
      required: true
    }
  },
}
</script>
<style>

</style>
