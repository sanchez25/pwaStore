<template>
  <section class="popular-games">
    <h2>Most popular games</h2>
    <v-row>
      <v-col cols="12"
             sm="4">
        <AppItem v-for="app in popular"
                 :key="app.id"
                 :app_data="app"/>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import AppItem from "@/components/Categories/AppItem";

export default {
  components: {
    AppItem
  },
  data() {
    return {
      popular: [
        {
          id: '1',
          title: 'PinUp Casino',
          apps: '123',
          category: 'Casino, Sport',
          rating: '4.5',
          downloads: '134',
          logo: '/images/app/pin-up-logo.png'
        },
        {
          id: '2',
          title: 'Dragos Play To',
          apps: '12',
          category: 'Casino',
          rating: '4.4',
          downloads: '594',
          logo: '/images/app/draggos-play-logo.png'
        },
        {
          id: '3',
          title: 'Sports bookmaker cool',
          apps: '42',
          category: 'Casino',
          rating: '4.3',
          downloads: '159',
          logo: '/images/app/bookmaker-cool-logo.png'
        },
        {
          id: '4',
          title: 'PinUp Casino',
          apps: '42',
          category: 'Casino',
          rating: '4.3',
          downloads: '540',
          logo: '/images/app/logo.png'
        }
      ]
    }
  }
}
</script>
<style>

</style>
