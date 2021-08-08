import { createStore } from 'vuex'

export interface IRootState {
  count: number
}

const store = createStore<IRootState>({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store