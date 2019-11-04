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
        name: "0-60 Max seconds",
        values: [5, 6, 7]
      },
      {
        type: "other",
        name: "Engine Type",
        values: ["Single", "Parallel Twin", "Triple", "Inline-Four"]
      },
      {
        type: "other",
        name: "Bike Type",
        values: ["Naked", "Sports", "Classic", "Retro", "Sports Tourer", "Cafe Racer", "Cruiser"]
      },
    ],
    appliedFilters : [
      {
        name: "Make",
        values: ["Yamaha"]
      }
    ],
    selectedMake : "",
    selectedModel : "",
    allBikes : [
      {
        make : "BMW",
        model : "G310R (2017-2019)",
        price : 4300,
        maxSecsTo60 : 6.5,
        engineType : "Single",
        bikeType : "Naked",
        img : "https://auto.ndtvimg.com/bike-images/big/bmw/g-310-r/bmw-g-310-r.jpg?v=10",
        power: 35
      },
      {
        make : "BMW",
        model : "S1000R (2018-2019)",
        price : 12000,
        maxSecsTo60 : 2.7,
        engineType : "Inline-four",
        bikeType : "Supersports",
        img : "https://auto.ndtvimg.com/bike-images/big/bmw/s-1000-r/bmw-s-1000-r.jpg?v=4",
        power: 205
      },
      {
        make : "BMW",
        model : "G310GS (2017-2019)",
        price : 4000,
        maxSecsTo60 : 6.7,
        engineType : "Single",
        bikeType : "Adventure",
        img : "https://auto.ndtvimg.com/bike-images/big/bmw/g-310-gs/bmw-g-310-gs.jpg?v=7",
        power: 35
      },
      {
        make : "KTM",
        model : "Duke 125 (2017-2019)",
        price : 4300,
        maxSecsTo60 : 14.5,
        engineType : "Single",
        bikeType : "Naked",
        img : "https://i.pinimg.com/originals/83/1c/d3/831cd34e6cc0e5b8ad740cf49ee09c72.png",
        power: 14
      },
      {
        make : "KTM",
        model : "RC390 (2015-2019)",
        price : 4100,
        maxSecsTo60 : 4.6,
        engineType : "Single",
        bikeType : "Supersports",
        img : "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 43
      },
      {
        make : "KTM",
        model : "Duke 790 (2017-2019)",
        price : 8500,
        maxSecsTo60 : 3.7,
        engineType : "Parallel Twin",
        bikeType : "Naked",
        img : "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 80
      },
      {
        make : "Yamaha",
        model : "R3 (2019-2019)",
        price : 5300,
        maxSecsTo60 : 5.2,
        engineType : "Parallel Twin",
        bikeType : "Supersports",
        img : "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 43
      },
      {
        make : "Yamaha",
        model : "R6 (2016-2019)",
        price : 10000,
        maxSecsTo60 : 3.9,
        engineType : "Inline-four",
        bikeType : "Supersports",
        img : "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 120
      },
      {
        make : "Yamaha",
        model : "R1 (2016-2019)",
        price : 16000,
        maxSecsTo60 : 2.7,
        engineType : "Inline-four",
        bikeType : "Supersports",
        img : "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 220
      }
    ],
    filteredBikes : []
  },
  mutations: {
    setMake(state, make) {
      state.selectedMake = make;
    },
    setModel(state, model) {
      state.selectedModel = model;
    },
    setFilteredBikes(state, allBikes) {
      state.filteredBikes = allBikes;
    }
  },
  actions: {
    retrieveBikes({commit, state}) {
      // TODO: Set network request onload
      commit('setFilteredBikes', state.allBikes)
    }
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
    },
    getFilteredBikes(state) {
      return state.filteredBikes;
    }
  },
  modules: {
  }
})
