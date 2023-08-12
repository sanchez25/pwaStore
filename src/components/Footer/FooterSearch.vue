<template>
  <div class="search__form footer">
    <v-text-field
      label="Search"
      outlined
      class="search__input"
      v-model="searchValue"
      @keyup.enter="search(searchValue)"
    ></v-text-field>
    <button
        class="search__btn"
        @click="search(searchValue)"
        name="search"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    search(searchValue) {
      this.$router.push({
        path: this.localePath('/search'),
        query: { q: searchValue }
      })
    },
  }
}
</script>
<style>

</style>
