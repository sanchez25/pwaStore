<template>
  <nuxt-link :to="localePath(`/app/${app_data.slug}`)">
    <!--<article itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem"
             class="app-card">-->
    <article class="app-card">
      <!--<meta itemprop="position" :content='index'>
      <link itemprop="url" :href="localePath(`/app/${app_data.slug}`)">-->
      <!--<img itemprop="image" class="image-app" :alt="app_data.icon_alt" width="60" height="60" :src="app_data.icon">-->
      <img class="image-app" :alt="app_data.icon_alt" width="60" height="60" :src="app_data.icon">
      <div class="app-card__info">
        <!--<h2 itemprop="name">{{ app_data.h1 }}</h2>-->
        <h2>{{ app_data.h1 }}</h2>
        <ul>
          <li v-for="(category, index) in app_data.categories"
              :key="index">
            <span>{{ category.h1 }}</span>
          </li>
        </ul>
        <div class="app-card__last">
          <span class="app-card__rating">{{ toFix(app_data.rating) }}</span>
          <span class="app-card__text">{{ app_data.installs }} downloads</span>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    app_data: {
      type: Object,
      default() {
        return {}
      }
    },
    index: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  methods: {
    toFix(value) {
      value = parseFloat(value)
      return value.toFixed(1)
    }
  }
}
</script>
<style>

.app-card__rating:after {
  background-image: url("/images/app/star.svg");
}

</style>
