<template>
  <div id="app">
    <Header></Header>
    <div class="main-container">
      <div class="left-container">
      <FilterContainer></FilterContainer>
      </div>
      <div class="right-container">
        <div>Hello</div>
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
  justify-content: space-between;
}

.left-container {
  margin: 10px;
  border: 1px solid red;
  flex: 0 0 25em;
}

.right-container {
  margin: 10px;
  border: 1px solid red;
  flex: 1;
}
</style>
