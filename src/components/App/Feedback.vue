<template>
  <section class="feedback">
    <div class="feedback-title">
      <span>Leave your feedback</span>
    </div>
    <div class="feedback-form">
      <v-form>
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey lighten-2"
          empty-icon="$ratingFull"
          class="rating-form"
          hover
          required
        ></v-rating>
        <v-text-field
          v-model="author"
          outlined
          label="Name"
          required
        ></v-text-field>
        <v-textarea
          v-model="review"
          outlined
          required
          clearable
          clear-icon="mdi-close-circle"
          label="Review"
        ></v-textarea>
        <div class="feedback-btn">
          <v-btn
            class="form-btn"
            @click="addReview"
          >
            Publish
          </v-btn>
        </div>
      </v-form>
      <v-dialog
          v-model="dialog"
          width="320"
      >
        <v-card>
          <v-card-title class="justify-space-between"></v-card-title>
          <v-card-text class="pb-2">
            <p class="mb-2 text-center">Your review has been added to the moderation queue</p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
                color="#4d8643"
                @click="dialog = false;"
                width="100%"
                class="white--text"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
          v-model="error"
          width="320"
      >
        <v-card>
          <v-card-title class="justify-space-between"></v-card-title>
          <v-card-text class="pb-2">
            <p class="mb-2 text-center">All form fields must be completed</p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
                color="#4d8643"
                @click="error = false;"
                width="100%"
                class="white--text"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    author: '',
    rating: 5,
    review: '',
    dialog: false,
    error: false
  }),
  props: {
    slug: {
      type: String,
      required: true
    },
    appName: {
      type: String,
      required: true
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
     async addReview() {
       try {
         const token = await this.$recaptcha.execute('login')

         const response = await this.$axios.post(`/api/applications/${this.slug}/reviews?lang=${this.$i18n.locale}`, {
           author: this.author,
           rating: this.rating,
           review: this.review,
           token: token
         })
         this.dialog = true
         this.$fireEvent("review_sent", this.appName, this.slug)
       } catch (error) {
         this.error = true
         this.$fireEvent("review_failed", this.appName, this.slug)
         console.log('Error:', error)
       }
     }
  },

  beforeDestroy() {
    this.$recaptcha.destroy()
  }
}
</script>
<style>

</style>
