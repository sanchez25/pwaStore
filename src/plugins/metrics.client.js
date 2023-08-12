export default ({ i18n }, inject) => {
  const fireEvent = (eventName, appName, appSlug) => {
    ym(89625987, 'reachGoal', eventName)
    gtag("event", eventName, {
      slug: appSlug,
      app_name: appName,
      locale: `${i18n.locale}`,
      browser: window.jscd.browser,
      os: window.jscd.os,
      cookieEnabled: window.jscd.cookies,
      screen: window.jscd.screen,
      mobile: window.jscd.mobile
    })
    console.log(`Event ${eventName} fired for ${appName} [${appSlug}]`)
  }
  inject('fireEvent', fireEvent)
}
