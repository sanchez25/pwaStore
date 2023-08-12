<template>
  <article
    @click="this.$router.push('#')"
    class="app-card"
  >
    <span class="app-card__number">{{ app_data.id }}.</span>
    <img :alt="app_data.title" width="60" height="60" :src="app_data.logo">
    <div class="app-card__info">
      <nuxt-link to="#">
        <h2>{{ app_data.title }}</h2>
      </nuxt-link>
      <ul>
        <li>
          <nuxt-link to="#" rel="tag">{{ app_data.category }}</nuxt-link>
        </li>
      </ul>
      <div class="app-card__last">
        <span class="app-card__rating">{{ toFix(app_data.rating) }}</span>
        <span class="app-card__text">{{ app_data.downloads }} downloads</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    app_data: {
      type: Object,
      default() {
        return {}
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

</style>
