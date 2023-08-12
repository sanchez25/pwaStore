<template xmlns="http://www.w3.org/1999/html">
  <section class="app-section">
    <div class="app-top">
      <div class="app-card">
        <!--<img itemprop="image" class="single-img" :alt="app.page.icon_alt" width="60" height="60" :src="app.page.icon">-->
        <img class="single-img" :alt="app.page.icon_alt" width="60" height="60" :src="app.page.icon">
        <div class="app-card__info">
          <!--<h1 itemprop="name">{{ app.page.h1 }}</h1>-->
          <h1>{{ app.page.h1 }}</h1>
          <ul>
            <li v-for="category in app.categories"
                :key="category.slug">
              <nuxt-link :to="localePath(`/categories/${category.slug}/`)" rel="tag">{{ category.h1 }}</nuxt-link>
            </li>
          </ul>
          <ul>
            <li>
              <!--<span class="single-downloads" itemprop="operatingSystem">iOS</span>-->
              <span class="single-downloads">iOS</span>
            </li>
            <li>
              <!--<span class="single-downloads" itemprop="operatingSystem">Android</span>-->
              <span class="single-downloads">Android</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="app-card__bottom">
        <v-row>
          <v-col>
            <div class="app-item first">
              <span class="app-card__rating">{{ toFix(app.rating) }}</span>
              <span class="app-card__text">{{ app.reviews_count }} reviews</span>
            </div>
          </v-col>
          <v-col>
            <div class="app-item">
              <span class="app-card__size"></span>
              <span class="app-card__text">{{ app.size }} MB</span>
            </div>
          </v-col>
          <v-col>
            <div class="app-item">
              <span class="app-card__limit"></span>
              <span class="app-card__text">{{ app.age }}+</span>
            </div>
          </v-col>
          <v-col>
            <div class="app-item">
              <span class="app-card__rating last">{{ app.installs }}</span>
              <span class="app-card__text">downloads</span>
            </div>
          </v-col>
        </v-row>
        <div class="app-buttons">
          <v-progress-linear
            v-if="is_installing"
            indeterminate
            class="mt-4"
          />
          <v-btn v-else-if="is_installed"
             class="download-btn"
             @click="openPwa()">
            Open
          </v-btn>
          <v-btn v-else
             class="download-btn"
             @click="installPwa(); safariSnackbar(); openDialog()"
          >
            Download
          </v-btn>
          <span class="or">or</span>
          <v-btn
              class="btn-site"
              @click="openWebsite()"
              rel="noreferrer"
              target="_blank"
          >
            <span class="btn-site__icon"></span>
            Go to website
          </v-btn>
        </div>
      </div>
    </div>
    <ScreenshotsSlider :screenshots="app.page.screenshots"/>
    <v-snackbar
        v-if="$device.isIos && $device.isSafari"
        v-model="snackbar"
        color="white"
        width="100%"
    >
      <span>Install the app on your Iphone for free. Tap and then Add to Home Screen</span>
      <template v-slot:action="{ attrs }">
        <v-btn
            color="#414141"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          <div class="close-icon"></div>
        </v-btn>
      </template>
    </v-snackbar>
    <v-dialog
        v-else-if="$device.isMacOS && $device.isSafari"
        v-model="dialog"
        width="320"
    >
      <v-card>
        <v-card-title class="justify-space-between">
          <span>How to install PWA app to your device?</span>
          <v-btn
              color="primary"
              class="pl-0 pr-0"
              text
              min-width="14px"
              height="14px"
              @click="dialog = false"
          >
            <div class="close-icon"></div>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <p class="mb-2"><span class="step">Step 1:</span> Switch to Google Chrome browser</p>
          <p class="mb-2"><span class="step">Step 2:</span> Re-open page with app</p>
          <p class="mb-4"><span class="step">Step 3:</span> App to download prompt in the bottom browser bar</p>
          <p class="mb-0">That is it! App will appear on your homescreen!</p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import ScreenshotsSlider from '~/components/App/ScreenshotsSlider'

export default {
  data() {
    return {
      snackbar: false,
      dialog: false
    }
  },
  components: {
    ScreenshotsSlider
  },
  props: {
    app: {
      type: Object,
      required: true
    },
    installPwa: {
      type: Function,
      required: true
    },
    openPwa: {
      type: Function,
      required: true
    },
    openWebsite: {
      type: Function,
      required: true
    },
    is_installing: {
      type: Boolean,
      required: true
    },
    is_installed: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toFix(value) {
      value = parseFloat(value)
      return value.toFixed(1)
    },
    safariSnackbar() {
      /*let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      if(isSafari) {
        this.snackbar = true
      }*/
      this.snackbar = true
    },
    openDialog() {
      this.dialog = true
    },
  },
  computed: {
    installs() {
      if (this.app.installs < 1000) {
        return "100+"
      }
      if (this.app.installs < 10000) {
        return "1k+"
      }
      if (this.app.installs < 50000) {
        return "10k+"
      }
      if (this.app.installs < 100000) {
        return "50k+"
      }
      if (this.app.installs < 500000) {
        return "100k+"
      }
      if (this.app.installs < 1000000) {
        return "500k+"
      }
      return "1m+"
    }
  }
}
</script>
<style>

  .app-item .app-card__rating:after {
    background-image: url("/images/app/single-star.svg");
  }

  .app-card__size {
    background-image: url("/images/app/file.svg");
  }

  .app-card__limit:after {
    background-image: url("/images/app/eighteen.svg");
  }

  .btn-site__icon {
    background-image: url("/images/btn-site.svg");
  }

  .close-icon {
    background-image: url("/images/close.svg");
  }

</style>
