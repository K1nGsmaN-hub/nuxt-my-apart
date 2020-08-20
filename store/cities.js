export const state = () => ({
  cities: []
})

export const mutations = {
  setCities(state, cities) {
    state.cities = cities
  }
}

export const actions = {
  async fetch({commit}) {
    const cities = await this.$axios.$get('https://5f3a6e3b2300b100169a8b93.mockapi.io/api/v1/cities')

    commit('setCities', cities)
  }
}

export const getters = {
  cities: s => s.cities
}
