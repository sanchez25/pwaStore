<template>
  <div class="footer-lang">
    <div class="footer-title">
      <span>Language:</span>
    </div>
    <LangSwitcher :bordered="true"></LangSwitcher>
  </div>
</template>

<script>
import LangSwitcher from "@/components/lang/LangSwitcher";

export default {
  components: {
    LangSwitcher,
  },
  data() {
    return {
      isElVisible: false
    }
  },
  methods: {
    footerLang() {
      this.isElVisible = !this.isElVisible
    }
  }
}
</script>
<style>

</style>
