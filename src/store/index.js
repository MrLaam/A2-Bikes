import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: [
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
        values: ["G310R", "G310GS", "S1000R"]
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
        name: "Max Price",
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
    appliedFilters: [],
    allBikes: [
      {
        make: "BMW",
        model: "G310R (2017-2019)",
        Price : 4300,
        maxSecsTo60: 6.5,
        engineType: "Single",
        bikeType: "Naked",
        img: "https://auto.ndtvimg.com/bike-images/big/bmw/g-310-r/bmw-g-310-r.jpg?v=10",
        power: 35
      },
      {
        make: "BMW",
        model: "S1000R (2018-2019)",
        price: 12000,
        maxSecsTo60: 2.7,
        engineType: "Inline-four",
        bikeType: "Supersports",
        img: "https://auto.ndtvimg.com/bike-images/big/bmw/s-1000-r/bmw-s-1000-r.jpg?v=4",
        power: 205
      },
      {
        make: "BMW",
        model: "G310GS (2017-2019)",
        price: 4000,
        maxSecsTo60: 6.7,
        engineType: "Single",
        bikeType: "Adventure",
        img: "https://auto.ndtvimg.com/bike-images/big/bmw/g-310-gs/bmw-g-310-gs.jpg?v=7",
        power: 35
      },
      {
        make: "KTM",
        model: "Duke 125 (2017-2019)",
        price: 4300,
        maxSecsTo60: 14.5,
        engineType: "Single",
        bikeType: "Naked",
        img: "https://i.pinimg.com/originals/83/1c/d3/831cd34e6cc0e5b8ad740cf49ee09c72.png",
        power: 14
      },
      {
        make: "KTM",
        model: "RC390 (2015-2019)",
        price: 4100,
        maxSecsTo60: 4.6,
        engineType: "Single",
        bikeType: "Supersports",
        img: "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 43
      },
      {
        make: "KTM",
        model: "Duke 790 (2017-2019)",
        price: 8500,
        maxSecsTo60: 3.7,
        engineType: "Parallel Twin",
        bikeType: "Naked",
        img: "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 80
      },
      {
        make: "Yamaha",
        model: "R3 (2019-2019)",
        price: 5300,
        maxSecsTo60: 5.2,
        engineType: "Parallel Twin",
        bikeType: "Supersports",
        img: "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 43
      },
      {
        make: "Yamaha",
        model: "R6 (2016-2019)",
        price: 10000,
        maxSecsTo60: 3.9,
        engineType: "Inline-four",
        bikeType: "Supersports",
        img: "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 120
      },
      {
        make: "Yamaha",
        model: "R1 (2016-2019)",
        price: 16000,
        maxSecsTo60: 2.7,
        engineType: "Inline-four",
        bikeType: "Supersports",
        img: "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 220
      }
    ],
    filteredBikes: []
  },
  mutations: {
    addFilter(state, filter) {
      let shouldAddFilter = true;

      state.filteredBikes = state.allBikes;
      
      if (state.appliedFilters.length > 0) {
        for (var x = 0; x < state.appliedFilters.length; x++) {

          if (state.appliedFilters[x].name === filter.name) {
            shouldAddFilter = false;
            state.appliedFilters[x].value = filter.value;
            checkResetModelFilter(state, filter);
          }
        }
      } else {
        shouldAddFilter = false;
         state.appliedFilters.push({
          name: filter.name,
          value: filter.value,
          type: filter.type
        }) 
      }

      if(shouldAddFilter){
        state.appliedFilters.push({
          name: filter.name,
          value: filter.value,
          type: filter.type
        })
      }

      for (var y = 0; y < state.appliedFilters.length; y++) {
        switch (state.appliedFilters[y].name) {
          case "Make":
            console.log(state.appliedFilters[y].value)
            if(state.appliedFilters[y].value === ""){
              state.filteredBikes = state.allBikes;
            } else {
              state.filteredBikes = state.filteredBikes.filter((bike) => {
              return bike.make === state.appliedFilters[y].value;
            });
            }
            break;
          case "BMW": case "KTM": case "Yamaha":
            state.filteredBikes = state.filteredBikes.filter((bike) => {
              return bike.model.indexOf(state.appliedFilters[y].value) !== -1;
            });
            break;
        }

      }

    },
    setFilteredBikes(state, allBikes) {
      state.filteredBikes = allBikes;
    }
  },
  actions: {
    retrieveBikes({ commit, state }) {
      // TODO: Set network request onload
      commit('setFilteredBikes', state.allBikes)
    }
  },
  getters: {
    getFilters(state) {
      console.log(state)
      return state.filters
    },
    getSelectedMake(state) {
      for (var x = 0; x < state.appliedFilters.length; x++) {
        if (state.appliedFilters[x].name === "Make") {
          return state.appliedFilters[x].value;
        }
      }
    },
    getFilteredBikes(state) {
      return state.filteredBikes;
    }
  },
  modules: {
  }
})

function checkResetModelFilter(state, filter) {
  if (filter.name === "Make") {
    for (var x = 0; x < state.appliedFilters.length; x++) {
      if (state.appliedFilters[x].type === "model") {
         state.appliedFilters.splice(x, x + 1);
      }
    }
  }
}