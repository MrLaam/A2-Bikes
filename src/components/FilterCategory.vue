<template>
  <div class="category-container">
    <div class="category-title-container">
    <h4 class="category-title" v-if="filter.type !== 'model'">{{filter.name}}</h4>
    <h4 class="category-title" v-if="filter.type === 'model'">Model</h4>
    </div>
    <div class="category-dropdown-container">
    <select class="category-dropdown" :disabled="(filter.name === 'Model') && !selectedMake" @change="onFilterSelect($event, filter)">
      <option value="" selected>{{filter.name}} (Any)</option>
      
      <template v-if="filter.name !== 'Model'">
        <option v-for="value in filter.values" v-bind:key="value">{{value}}</option>
      </template>

      <template v-if="filter.name === 'Model'">
        <option  v-for="value in filter.values[selectedMake]" v-bind:key="value">{{value}}</option>
      </template>
      
    </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FilterCategory',
  props: ["filter"],
  methods: {
    onFilterSelect(event, filter) {
      this.$store.commit("addFilter", {name: filter.name, value: event.target.value, type: filter.type})
    }
  },
  computed: {
    ...mapGetters({
      selectedMake: 'getSelectedMake'
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.category-container {
border-bottom: 1px solid #D3D3D3;
padding: 0 0 20px 7px;
}

.category-title-container {

}

.category-dropdown-container {
    padding: 0 0 0 5px;
}

.category-title {
  padding: 0 0 0 3px;
}

.category-dropdown {
  width: 90%;
  text-align: center;
  height: 30px;
  background: url(../assets/dropdown.png) no-repeat right white;
  background-origin: content-box;
  background-size: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0 4px;
}
</style>
