export const state = () => ({
  id: null,
  password: null,
})

export const mutations = {
  idstored: (state, id) => {
    state.id = id
  },
  pwstored: (state, password) => {
    state.password = password
  },
}
