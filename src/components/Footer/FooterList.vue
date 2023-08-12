<template>
  <div id="footer">
    <v-container>
      <header>
        <div class="footer-top">
          <FooterSearch/>
          <FooterLang/>
        </div>
        <div class="footer-bottom">
          <Menu :categories="categories"/>
          <div class="contacts-footer">
            <div class="footer-title">
              <span>Contacts</span>
            </div>
            <div class="footer-logo">
              <img class="logo" width="24" height="24" alt="PWA logo" src="/images/logo.svg"/>
              <span>PWA store</span>
            </div>
            <div class="footer-description">
              <span>Enjoy the latest gambling apps for Android, Windows and iOS. Anytime, anywhere, on your devices.</span>
            </div>
            <div class="footer-mail">
              <span>Email:
                <a href="mailto:info@pwastorage.com">
                  <!--<span itemprop="email">info@pwastorage.com</span>-->
                  <span>info@pwastorage.com</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
      <Copyright/>
    </v-container>
  </div>
</template>

<script>
import Menu from '~/components/Footer/Menu'
import Copyright from '~/components/Footer/Copyright'
import FooterSearch from '~/components/Footer/FooterSearch'
import FooterLang from '~/components/Footer/FooterLang'

export default {
  components: {
    Menu,
    FooterLang,
    FooterSearch,
    Copyright
  },
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
