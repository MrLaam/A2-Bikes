import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters : [
      {
        type: "make",
        name: "Make",
        values: ["BMW", "KTM", "Yamaha"]
      },
      {
        type: "model",
        name: "Model",
        values: []
      },
      {
        type: "model",
        name: "BMW",
        values: ["G310R", "G310GS"]
      },
      {
        type: "model",
        name: "KTM",
        values: ["Duke 125", "RC390"]
      },
      {
        type: "model",
        name: "Yamaha",
        values: ["R3", "R6", "R1"]
      },
      {
        type: "other",
        name: "Price",
        values: [1234, 1233, 5515]
      },
      {
        type: "other",
        name: "Year",
        values: [2019, 2018, 2017]
      }
    ],
    appliedFilters : [
      {
        name: "Make",
        values: ["Yamaha"]
      }
    ],
    selectedMake : "",
    selectedModel : ""
  },
  mutations: {
    setMake(state, make) {
      state.selectedMake = make;
    },
    setModel(state, model) {
      state.selectedModel = model;
    }
  },
  actions: {

  },
  getters: {
    getFilters(state) {
      return state.filters
    },
    getMake(state) {
      return state.selectedMake;
    },
    getModel(state) {
      return state.selectedModel;
    }
  },
  modules: {
  }
})
