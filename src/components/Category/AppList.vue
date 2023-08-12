<template>
  <section class="popular-games">
    <!--<h1 itemprop="name">{{ h1 }}</h1>-->
    <h1>{{ h1 }}</h1>
    <v-row>
      <v-col cols="12"
             sm="4">
        <App v-for="(app, index) in apps"
             :key="app.slug"
             :index="index + 1"
             :app_data="app"/>
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
    apps: {
      type: Array,
      required: true
    },
    h1: {
      type: String,
      required: true
    }
  },
}
</script>
<style>

</style>
