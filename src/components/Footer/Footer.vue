<template>
  <div id="footer">
    <v-container>
      <!--<header itemscope itemtype="https://schema.org/OnlineBusiness" :itemid="`${base_url}${localePath('/', 'en')}`">-->
      <header>
        <div class="footer-top">
          <FooterSearch />
          <FooterLang />
        </div>
        <div class="footer-bottom">
          <Menu :categories="categories"/>
          <FooterContacts />
        </div>
      </header>
      <Copyright />
    </v-container>
  </div>
</template>

<script>
import Menu from '~/components/Footer/Menu'
import Copyright from '~/components/Footer/Copyright'
import FooterSearch from '~/components/Footer/FooterSearch'
import FooterLang from '~/components/Footer/FooterLang'
import FooterContacts from '~/components/Footer/FooterContacts'
export default {
  components: {
    Menu,
    FooterLang,
    FooterContacts,
    FooterSearch,
    Copyright
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      base_url: process.env.BASE_URL
    }
  },
}
</script>
<style>

</style>
