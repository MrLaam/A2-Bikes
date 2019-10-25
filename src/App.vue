<template>
  <div id="app">
    <Header></Header>
    <div class="main-container">
      <div class="filter-container">
        <Filter></Filter>
      </div>
      <div class="cards-container">
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Filter from './components/Filter.vue'

export default {
  name: 'app',
  components: {
    Header,
    Filter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-container {
  margin: 30px;
  display: flex;
}

.filter-container {
  margin: 10px;
  border: 1px solid red;
  flex-grow: 1
}

.cards-container {
  margin: 10px;
  border: 1px solid red;
  flex-grow: 3
}
</style>
