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
          "BMW": ["G310R", "G310GS"],
          "KTM": ["Duke 125", "RC390", "Duke 390"],
          "Yamaha": ["R3", "MT-03", "MT-07"]
        }
      },
      {
        type: "other",
        name: "Max Price",
        values: [4000, 4500, 5000, 5500, 6000, 6500, 7000]
      },
      {
        type: "other",
        name: "Engine Type",
        values: ["Single", "Parallel Twin", "Triple", "Inline-four"]
      },
      {
        type: "other",
        name: "Bike Type",
        values: ["Naked", "Supersport", "Adventure", "Retro", "Sports Tourer", "Cafe Racer", "Cruiser"]
      },
    ],
    appliedFilters: [],
    allBikes: [
      {
        make: "BMW",
        model: "G310R (2017-2019)",
        price: 4400,
        engineType: "Single",
        bikeType: "Naked",
        img: "https://auto.ndtvimg.com/bike-images/big/bmw/g-310-r/bmw-g-310-r.jpg?v=10",
        power: 35
      },
      {
        make: "BMW",
        model: "G310GS (2017-2019)",
        price: 4000,
        engineType: "Single",
        bikeType: "Adventure",
        img: "https://auto.ndtvimg.com/bike-images/big/bmw/g-310-gs/bmw-g-310-gs.jpg?v=7",
        power: 35
      },
      {
        make: "KTM",
        model: "Duke 125 (2017-2019)",
        price: 4300,
        engineType: "Single",
        bikeType: "Naked",
        img: "https://i.pinimg.com/originals/83/1c/d3/831cd34e6cc0e5b8ad740cf49ee09c72.png",
        power: 14
      },
      {
        make: "KTM",
        model: "RC390 (2015-2019)",
        price: 4100,
        engineType: "Single",
        bikeType: "Supersport",
        img: "https://www.ktm.com/globalassets/products-pim-data/ke2-motorcycles/supersport/rc-3904/rc-390-2020/f5303t1/pho_bike_90_re.png",
        power: 43
      },
      {
        make: "KTM",
        model: "Duke 390 (2017-2019)",
        price: 4500,
        engineType: "Single",
        bikeType: "Naked",
        img: "https://www.ktm.com/globalassets/products-pim-data/ke2-motorcycles/naked-bike/390-duke4/390-duke-2020/f4303t1/pho_bike_90_re.png",
        power: 40
      },
      {
        make: "Yamaha",
        model: "R3 (2019-2019)",
        price: 5300,
        engineType: "Parallel Twin",
        bikeType: "Supersport",
        img: "https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/files/motorcycle/vr/2020-r3/20r3fblue-1200-01.jpg",
        power: 43
      },
      {
        make: "Yamaha",
        model: "MT-03 (2014-2019)",
        price: 4900,
        engineType: "Parallel Twin",
        bikeType: "Naked",
        img: "http://www.phmotorcycles.co.uk/wp-content/uploads/2019/09/2019-Yamaha-MT-03-Blue.jpg",
        power: 120
      },
      {
        make: "Yamaha",
        model: "MT-07 (2014-2019)",
        price: 6300,
        engineType: "Parallel Twin",
        bikeType: "Naked",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEHNLafmmLgs1wzDO2aRRCRDEmHuIcQMtKIIWOeUHl4UeEk0d&s11kogRXPfwT4I2Ix/2hh5LILn1ZpVB7zmb+Cuha0cxSlKBSlKBSlKBSlKBSlKBXkuBXqkUFFr49apNjVHQ1dFa8m2O1BD8VxGGvW2tX7ee2whlYGD/sexGorS3M/JgsEtgr+e3r+zu6XF9AxGVh6mD771v9rC9hVvewyn7ooOXnDiQYWPQdPWvuG4czkkkk9O5nauk34TaO6A/QVTHBLH/iX/ACj/AGoNQ8s/DbxnD4m8lq3+6rBrrfqqfWT6Vuvg+Fw+HtLZw6qltRoB+ZJ3JPUnU1StcIs9FA+gq4XhqjagvA4719mrdcLHWvQsnvQV6VR8M96ZG70FalUcrd68nPQXFKtsz19F1utBcVSxeGS6jW7ihkdSrKdmUiCD7g15+0jrXw4xOpoOcubOXr/CcXAJNtpNm4drifuOf312PfQ9aucHxO3dgqfBvRBE5Q3fXr/U1vDj+HweMstYxIDo3Q6EHoyndWHQitIcz8hX8MScPcXFWem3jKOzJ973WfYVjlw1yc8u3pOuydP4jzHszbgHNmJw9m3a8K26IsCD5tydTMdexrzx/nYFrN1kS09lmYS2csCuUqFEHXWfpWow9xdMrCOmdhH06VSKXWOgjv3/ABNZxgvrU28N79dg331xf5fGfXlPczc0XcXcMkyTIBO3qe2+i9KhDYa86YWwpdmYCF3Zj0H9R1NSnBOT8biTlw9owd7j+W2O5zka+yyfSt28gch4bhq58wu4hhDXSIgHdUH3R67n8h01rERqHnZMlrzuUlyJywnD8KtkQXPmuN3cjYegGg9p6msir5mHevs1KhSlKBSlKBSlKBSlKBSlKBSlKBSlKBXzLSlAy15NuvlKBkr2KUoPtKUoFKUoFKUoFfCKUoPJtjtXk4dT0pSgptgbZ3WrPE8Hst/21PuBSlBF3uUMK2psIf4RVEck4PpZA9pH6UpQSNjl20Ni4/jb/ertOEAbM34mlKCsuBI+8aqrhz3pSgqLb9a9gUpQfaUpQKUpQf/Z",
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
            checkModelReset(state, filter);
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

      checkFilterReset(state, filter);

      for (var y = 0; y < state.appliedFilters.length; y++) {

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
          case "Engine Type":
            state.filteredBikes = state.filteredBikes.filter((bike) => {
              return bike.engineType === state.appliedFilters[y].value;
            })
            break;
          case "Bike Type":
            state.filteredBikes = state.filteredBikes.filter((bike) => {
              return bike.bikeType === state.appliedFilters[y].value;
            })
            break;
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

function checkModelReset(state, filter) {
  if (filter.name === "Make") {
    for (var x = 0; x < state.appliedFilters.length; x++) {
      if (state.appliedFilters[x].type === "model") {
        state.appliedFilters.splice(x, x + 1);
      }
    }
  }
}

function checkFilterReset(state) {
  for (let x = 0; x < state.appliedFilters.length; x++) {
    if (state.appliedFilters[x].value === "") {
      state.appliedFilters.splice(x, 1)
    }
  }
}