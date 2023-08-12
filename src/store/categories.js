export const state = () => ({
  list: []
})

export const getters = {
  getMenuCategories(state) {
    return state.list
  }
}

export const mutations = {
  setMenuCategories(state, menu_categories) {
    state.list = menu_categories
  }
}
