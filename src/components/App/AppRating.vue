<template>
  <section class="app-section">
    <h2 class="rating-title">Rating and review</h2>
    <!--<div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating" class="rating-block">-->
    <div class="rating-block">
      <div class="rating-block__col">
        <!--<span itemprop="ratingValue" class="rating-block__val">{{ toFix(app.rating) }}</span>-->
        <span class="rating-block__val">{{ toFix(app.rating) }}</span>
        <div class="stars">
          <span class="star-item">&#9734;</span>
          <span class="star-item">&#9734;</span>
          <span class="star-item">&#9734;</span>
          <span class="star-item">&#9734;</span>
          <span class="star-item">&#9734;</span>
          <div class="stars-color" :style="{ width: sumStars() }">
            <span class="star-item">&#9733;</span>
            <span class="star-item">&#9733;</span>
            <span class="star-item">&#9733;</span>
            <span class="star-item">&#9733;</span>
            <span class="star-item">&#9733;</span>
          </div>
        </div>
        <!--<span itemprop="reviewCount" class="rating-block__count">{{ app.reviews_count }}</span>-->
        <span class="rating-block__count">{{ app.reviews_count }}</span>
      </div>
      <div class="rating-block__col">
        <div class="rating-block__params">
          <div class="rating-params__item">
            <span class="rating-params__position">5</span>
            <div class="rating-block__bar">
              <span :style="{ width: rating5() }"></span>
            </div>
          </div>
          <div class="rating-params__item">
            <span class="rating-params__position">4</span>
            <div class="rating-block__bar">
              <span :style="{ width: rating4() }"></span>
            </div>
          </div>
          <div class="rating-params__item">
            <span class="rating-params__position">3</span>
            <div class="rating-block__bar">
              <span :style="{ width: rating3() }"></span>
            </div>
          </div>
          <div class="rating-params__item">
            <span class="rating-params__position">2</span>
            <div class="rating-block__bar">
              <span :style="{ width: rating2() }"></span>
            </div>
          </div>
          <div class="rating-params__item">
            <span class="rating-params__position">1</span>
            <div class="rating-block__bar">
              <span :style="{ width: rating1() }"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    app: {
      type: Object,
      required: true
    }
  },
  methods: {
    maxRating() {
      return Math.max(this.app.stars.star_1, this.app.stars.star_2, this.app.stars.star_3, this.app.stars.star_4, this.app.stars.star_5)
    },
    rating1() {
      return this.app.stars.star_1 / this.maxRating() * 95 + '%'
    },
    rating2() {
      return this.app.stars.star_2 / this.maxRating() * 95 + '%'
    },
    rating3() {
      return this.app.stars.star_3 / this.maxRating() * 95 + '%'
    },
    rating4() {
      return this.app.stars.star_4 / this.maxRating() * 95 + '%'
    },
    rating5() {
      return this.app.stars.star_5 / this.maxRating() * 95 + '%'
    },
    sumRating() {
      return this.app.stars.star_1 + this.app.stars.star_2 + this.app.stars.star_3 + this.app.stars.star_4 + this.app.stars.star_5
    },
    sumStars() {
      return this.app.rating / 5 * 95 + '%'
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
