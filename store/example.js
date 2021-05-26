export const state = () => ({
  val: 0,
})

export const mutations = {
  increment(state) {
    state.val++
  },
}
