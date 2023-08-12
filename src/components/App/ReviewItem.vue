<template>
  <!--<article itemprop="review" itemscope itemtype="https://schema.org/Review" class="review-item">-->
  <article class="review-item">
    <!--<div class="author-block" itemprop="author" itemscope itemtype="https://schema.org/Person">-->
    <div class="author-block">
      <div class="logo-review">{{ shortAuthorName(review_data.author) }}</div>
      <!--<h3 itemprop="name">{{ review_data.author }}</h3>-->
      <h3>{{ review_data.author }}</h3>
    </div>
    <div class="review-rating">
      <!--<div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating" class="review-stars">-->
      <div class="review-stars">
        <!--<span class="review-value" itemprop="ratingValue">{{ toFix(review_data.rating) }}</span>-->
        <span class="review-value">{{ toFix(review_data.rating) }}</span>
        <div class="stars">
          <span class="star-item">&#9734;</span>
          <span class="star-item">&#9734;</span>
          <span class="star-item">&#9734;</span>
          <span class="star-item">&#9734;</span>
          <span class="star-item">&#9734;</span>
          <div class="stars-color" :style="{ width: starReview() }">
            <span class="star-item">&#9733;</span>
            <span class="star-item">&#9733;</span>
            <span class="star-item">&#9733;</span>
            <span class="star-item">&#9733;</span>
            <span class="star-item">&#9733;</span>
          </div>
          <!--<meta itemprop="bestRating" content="5">
          <meta itemprop="worstRating" content="1">-->
        </div>
      </div>
      <time class="data-review">{{ formatData(review_data.datetime) }}</time>
      <!--<time class="data-review" itemprop="datePublished" :datetime="review_data.datetime">{{ formatData(review_data.datetime) }}</time>-->
    </div>
    <!--<span class="text-review" itemprop="reviewBody">{{ review_data.review }}</span>-->
    <span class="text-review">{{ review_data.review }}</span>
    <!--<link itemprop="publisher" :href="`${base_url}${localePath('/', 'en')}`">-->
  </article>
</template>

<script>
export default {
  props: {
    review_data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      base_url: process.env.BASE_URL
    }
  },
  methods: {
    shortAuthorName(author) {
      const shortName = author.split(" ").slice(0, 2).map((word) => { return word[0]}).join("");
      if (shortName.length >= 2) {
        return shortName
      }
      return author.slice(0, 2)
    },
    starReview() {
      return this.review_data.rating / 5 * 95 + '%'
    },
    formatData(value) {
      const options = {}
      return new Intl.DateTimeFormat('ru', options).format(new Date(value))
    },
    toFix(value) {
      value = parseFloat(value)
      return value.toFixed(1)
    }
  }
}
</script>
<style>

</style>
