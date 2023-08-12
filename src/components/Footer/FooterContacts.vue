<template>
  <div class="contacts-footer">
    <div class="footer-title">
      <span>Contacts</span>
    </div>
    <div class="footer-logo">
      <!--<img itemprop="image logo" class="logo" width="24" height="24" alt="PWA logo" src="/images/logo.svg" />-->
      <img class="logo" width="24" height="24" alt="PWA logo" src="/images/logo.svg" />
      <!--<meta itemprop="url" :content="`${base_url}${localePath('/', 'en')}`">-->
      <!--<span itemprop="name">PWA store</span>-->
      <span>PWA store</span>
    </div>
    <div class="footer-description">
      <!--<span itemprop="description">Enjoy the latest gambling apps for Android, Windows and iOS. Anytime, anywhere, on your devices.</span>-->
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
</template>

<script>
export default {
  data() {
    return {
      base_url: process.env.BASE_URL
    }
  },
}
</script>
<style>

</style>
