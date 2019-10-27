<template>
  <div id="app">
    <Header></Header>
    <div class="main-container">
      <div class="left-container">
      <FilterContainer></FilterContainer>
      </div>
      <div class="right-container">
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FilterContainer from './components/FilterContainer.vue'

export default {
  name: 'app',
  components: {
    Header,
    FilterContainer
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

.left-container {
  height: 100px;
  margin: 10px;
  border: 1px solid red;
  flex-grow: 1
}

.right-container {
  margin: 10px;
  border: 1px solid red;
  flex-grow: 3
}
</style>
