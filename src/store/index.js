import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedMake: '',
    filters: [
      {
        type: "make",
        name: "Make",
        values: ["BMW", "KTM", "Yamaha"]
      },
      {
        type: "model",
        name: "Model",
        values: {
          "BMW": ["G310R", "G310GS", "S1000R"],
          "KTM": ["Duke 125", "RC390", "Duke 790"],
          "Yamaha": ["R3", "R6", "R1"]
        }
      },
      {
        type: "other",
        name: "Max Price",
        values: [2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000]
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
        price: 4400,
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
        bikeType: "supersport",
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
        bikeType: "supersport",
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
        bikeType: "supersport",
        img: "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 43
      },
      {
        make: "Yamaha",
        model: "R6 (2016-2019)",
        price: 10000,
        maxSecsTo60: 3.9,
        engineType: "Inline-four",
        bikeType: "supersport",
        img: "https://cdn2.yamaha-motor.eu/prod/product-assets/2020/YZF600R6/2020-Yamaha-YZF600R6-EU-Icon_Blue-Studio-001-03_Mobile.jpg",
        power: 120
      },
      {
        make: "Yamaha",
        model: "R1 (2016-2019)",
        price: 16000,
        maxSecsTo60: 2.7,
        engineType: "Inline-four",
        bikeType: "supersport",
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
            checkFilterReset(state, filter);
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

      if (shouldAddFilter) {
        state.appliedFilters.push({
          name: filter.name,
          value: filter.value,
          type: filter.type
        })
      }

      var filterNoToSkip = []
      for (var y = 0; y < state.appliedFilters.length; y++) {
        if (state.appliedFilters[y].value === "") {
          filterNoToSkip.push(y)
        }
      }

      for (var y = 0; y < state.appliedFilters.length; y++) {
        console.log(state.appliedFilters[y].name);

        if (filterNoToSkip.includes(y)) {
          continue
        } else {
          switch (state.appliedFilters[y].name) {
            case "Make":
              {
                state.filteredBikes = state.filteredBikes.filter((bike) => {
                  return bike.make === state.appliedFilters[y].value;
                });
              }
              break;
            case "Model":
              state.filteredBikes = state.filteredBikes.filter((bike) => {
                return bike.model.indexOf(state.appliedFilters[y].value) !== -1;
              });
              break;
            case "Max Price":
              state.filteredBikes = state.filteredBikes.filter((bike) => {
                return bike.price <= state.appliedFilters[y].value;
              })
              break;
          }
        }
      }

    },
    setFilteredBikes(state, allBikes) {
      state.filteredBikes = allBikes;
    },
  },
  actions: {
    retrieveBikes({ commit, state }) {
      // TODO: Set network request onload
      commit('setFilteredBikes', state.allBikes)
    }
  },
  getters: {
    getFilters(state) {
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

function checkFilterReset(state, filter) {
  // var filterToReset;
  // var filterTypeToReset;

  // switch (filter.name) {
  //   case "Make":
  //     filterToReset = "Make"
  //     filterTypeToReset = "make"
  //     break
  //   case "Max Price":
  //     filterToReset = "Max Price"
  //     filterTypeToReset = "other"
  //     break
  // }

  // if (filter.name === filterToReset) {
  //   for (var x = 0; x < state.appliedFilters.length; x++) {
  //     if (state.appliedFilters[x].type === filterTypeToReset) {
  //       state.appliedFilters.splice(x, x + 1);
  //     }
  //   }
  // }


  if (filter.name === "Make") {
    for (var x = 0; x < state.appliedFilters.length; x++) {
      if (state.appliedFilters[x].type === "model") {
        state.appliedFilters.splice(x, x + 1);
      }
    }
  } /*else if (filter.name === "Max Price") {
    for (var x = 0; x < state.appliedFilters.length; x++) {
      if (!filter.value) {
        state.appliedFilters.splice(x, x + 1);
        console.log(state.appliedFilters)
      }
    }
  }*/


  //TODO: Fix issue when any filter resets, make it filter properly
}