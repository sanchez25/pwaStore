<template>
  <div class="screenshots-block">
    <v-sheet>
      <v-slide-group
        active-class="success"
      >
        <v-slide-item
          v-for="screenshot in screenshots"
          :key="screenshot.image">
          <v-card
            color="grey lighten-1"
            class="slider-item"
            height="200"
            width="100"
            >
            <a :href="screenshot.image"
               data-fancybox="gallery"
               :data-caption="screenshot.alt"
            >
              <img
                  loading="lazy"
                  height="200"
                  width="100"
                  :src="screenshot.image"
                  :alt="screenshot.alt"
              >
            </a>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
export default {
  components: {
    Fancybox
  },
  props: {
    screenshots: {
      type: Array,
      required: true
    }
  },
}
</script>
<style>

</style>
