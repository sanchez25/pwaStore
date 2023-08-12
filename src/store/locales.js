export const state = () => ({
  locales: [],
  localesMap: {}
})

export const getters = {
  getLocalesMap(state) {
    return state.localesMap
  },
  getHreflangBuilder(state) {
    return (url, currentLocale) => {
      let hreflangLinks = state.locales.map((locale) => {
        let hrefUrl
        if (locale.code === "en") {
          hrefUrl = `${process.env.BASE_URL}${url}`
        } else {
          hrefUrl = `${process.env.BASE_URL}/${locale.code}${url}`
        }
        return {
          rel: 'alternate',
          hreflang: locale.code,
          href: hrefUrl
        }
      })
      hreflangLinks.push(
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: `${process.env.BASE_URL}${url}`
        }
      )
      let hrefUrl
      if (currentLocale === "en") {
        hrefUrl = `${process.env.BASE_URL}${url}`
      } else {
        hrefUrl = `${process.env.BASE_URL}/${currentLocale}${url}`
      }
      hreflangLinks.push(
        {
          rel: 'canonical',
          href: hrefUrl
        }
      )
      return hreflangLinks
    }
  }
}

export const mutations = {
  setLocales(state, locales) {
    let setOfLocales = new Set(this.$i18n.locales.map((locale) => locale.code.toLowerCase()))
    state.locales = locales.filter((locale) => {
      return setOfLocales.has(locale.code.toLowerCase())
    })

    let localesMap = {}
    state.locales.forEach(locale => {
      if (localesMap[locale.language.code] === undefined) {
        localesMap[locale.language.code] = {
          title: locale.language.title,
          availableWithoutRegion: false,
          regions: []
        }
      }
      if (locale.region === null) {
        localesMap[locale.language.code].availableWithoutRegion = true
      } else {
        localesMap[locale.language.code].regions.push(locale.region)
      }
    })
    state.localesMap = localesMap
  }
}
