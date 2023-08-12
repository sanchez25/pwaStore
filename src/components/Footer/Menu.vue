<template>
  <div class="footer-menu">
    <div class="footer-title">
      <span>Menu</span>
    </div>
    <nav class="footer-nav">
      <ul class="footer-nav__menu">
        <li>
          <nuxt-link class="footer-link" to="#">Category</nuxt-link>
          <ul class="sub-menu">
            <li v-for="category in categories" :key="category.slug">
              <nuxt-link class="footer-link" :to="localePath(`/categories/${category.slug}`)">{{ category.h1 }}</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link class="footer-link" :to="localePath('/categories')">Categories</nuxt-link>
        </li>
        <li>
          <nuxt-link class="footer-link" :to="localePath('/about-us')">About US</nuxt-link>
        </li>
        <li>
          <nuxt-link class="footer-link" :to="localePath('/privacy-policy')">Privacy Policy</nuxt-link>
        </li>
        <li>
          <nuxt-link class="footer-link" :to="localePath('/cookie')">Cookie</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
}
</script>
<style>

</style>
