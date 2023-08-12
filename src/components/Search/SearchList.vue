<template>
  <section class="popular-games">
    <!--<h1 itemprop="name">{{ h1 }}</h1>-->
    <h1>{{ h1 }}</h1>
    <v-row>
      <v-col cols="12" sm="4">
        <App v-for="(application, index) in applications"
             :index="index"
             :app_data="application"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import App from "@/components/Category/App";

export default {
  components: {
    App
  },
  props: {
    applications: {
      type: Array,
      required: true
    },
    h1: {
      type: String,
      required: true
    }
  }
}
</script>
<style>

</style>
