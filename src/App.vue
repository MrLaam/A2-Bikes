<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Header></Header>
    <div class="main-container">
      <div class="left-container">
        <FilterContainer></FilterContainer>
      </div>
      <div class="right-container">
        <div>
          <BikeCard v-for="bike in filteredBikes" v-bind:key="bike.model" :bike="bike"></BikeCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import FilterContainer from "./components/FilterContainer.vue";
import BikeCard from "./components/BikeCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    FilterContainer,
    BikeCard
  },
  mounted: function() {
    this.$store.dispatch("retrieveBikes");
  },
  computed: {
    ...mapGetters({
      filteredBikes: "getFilteredBikes"
    })
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-container {
  padding-top: 50px;
  padding-bottom: 100px;
  margin: 0 auto;
  width: 50%;
  height: auto;
  display: flex;
  justify-content: space-between;
}

.left-container {
  margin: 10px 25px 10px 10px;
  border: 1px solid #d3d3d3;
  flex: 0 0 15em;
  height: fit-content;
}

.right-container {
  height: 100%;
  margin: 10px 10px 10px 25px;
  border: 1px solid #d3d3d3;
  flex: 1;
}
</style>
