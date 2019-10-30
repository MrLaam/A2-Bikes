<template>
  <div class="category-container" v-if="(filter.type === 'other' || filter.type === 'make') || (filter.name === 'Model' && selectedMake === '') || (selectedMake === filter.name)">
    <div class="category-title-container">
    <h4 class="category-title" v-if="filter.type !== 'model'">{{filter.name}}</h4>
    <h4 class="category-title" v-if="filter.type === 'model'">Model</h4>
    </div>
    <select :disabled="filter.type !== 'other' && filter.type !== 'make' && (filter.type === 'model' && selectedMake === '')" @change="onFilterSelect($event, filter)" class="category-dropdown">
      <option value="" disabled selected>Any</option>
      <option v-for="value in filter.values" v-bind:key="value">{{value}}</option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FilterCategory',
  props: ["filter"],
  methods: {
    onFilterSelect(event, filter) {
      if(filter.type === 'make') {
        this.$store.commit("setMake", event.target.value)
      }
    }
  },
  computed: {
    ...mapGetters({
      selectedMake: 'getMake'
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.category-container {
border: 1px solid red;
display: flex;
}

.category-title-container {
  flex: 1;
  
}

.category-title {
  padding: 0 0 0 5px;
}

.category-dropdown {
  flex: 1;
}
</style>
