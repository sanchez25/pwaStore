<template>
  <v-menu offset-y
          v-if="isLangsLoaded"
          :close-on-content-click="false"
          v-model="menu"
          class="lang-list">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-on="on"
             class="lang-switcher">
        {{ title }}
      </v-btn>
    </template>
    <v-list>
      <v-list-group no-action
                    sub-group
                    class="lang-list">
        <template v-slot:activator>
          <v-list-item-title>{{ regionsList.title }}</v-list-item-title>
        </template>
        <v-list class="category-list">
          <v-list-item-group mandatory
                             v-model="selectedLang">
            <v-list-item class="lang__item"
                         v-for="langCode in langCodes"
                         :key="langCode"
                         :value="langCode"
                         @click="selectedRegion = undefined">
              <v-list-item-title>{{ langTitle(langCode) }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-list-group>
      <v-list-group v-if="regionsList.regions.length >= 1"
                    no-action
                    sub-group
                    class="lang-list">
        <template v-slot:activator>
          <v-list-item-title v-if="selectedRegion === undefined">Country</v-list-item-title>
          <v-list-item-title v-else>{{ selectedRegion.title }}</v-list-item-title>
        </template>
        <v-list class="category-list">
          <v-list-item-group v-model="selectedRegion">
            <v-list-item class="lang__item"
                         v-for="region in regionsList.regions"
                         :value="region"
                         :key="region.code">
              <v-list-item-title>{{ region.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-list-group>
      <v-list-item>
        <v-btn class="lang-btn"
               :disabled="!regionsList.availableWithoutRegion && selectedRegion === undefined"
               @click="switchLang()">
          Go
        </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      selectedLang: undefined,
      selectedRegion: undefined,
      menu: false
    }
  },
  methods: {
    switchLang() {
      this.menu = false
      let localePath
      if (this.selectedRegion !== undefined) {
        localePath = `${this.selectedLang}-${this.selectedRegion.code}`
      } else {
        localePath = `${this.selectedLang}`
      }
      this.$router.push({path: this.switchLocalePath(localePath)})
    },
    langTitle(code) {
      return this.langLocalesMap[code].title
    },
  },
  computed: {
    langLocalesMap() {
      return this.$store.getters["locales/getLocalesMap"]
    },
    isLangsLoaded() {
      return Object.keys(this.langLocalesMap).length !== 0
    },
    langCodes() {
      let langCodes = Object.keys(this.langLocalesMap)
      this.selectedLang = this.currentLangCode
      return langCodes
    },
    regionsList() {
      let regionsList = this.langLocalesMap[this.selectedLang]
      this.selectedRegion = regionsList.regions.find((elem) => elem.code === this.currentRegionCode)
      return regionsList
    },
    currentLangCode() {
      const codes = this.$i18n.locale.split('-')
      return codes[0]
    },
    currentRegionCode() {
      const codes = this.$i18n.locale.split('-')
      if (codes.length <= 1) {
        return undefined
      }
      return codes[1]
    },
    title() {
      return this.$i18n.locale.replace("-", " / ").toUpperCase()
    }
  },
}
</script>
<style>
</style>
