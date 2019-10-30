<template>
  <div>
    <FilterCategory v-for="filter in filters" v-bind:key="filter.name" :filter=filter></FilterCategory>
  </div>
</template>

<script>
import FilterCategory from './FilterCategory.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'FilterContainer',
  components: {
    FilterCategory
  },
  computed: {
    ...mapGetters({
      filters: 'getFilters'
    })
  },
  methods: {
    updateBikes() {
      this.$store.commit("setBikes", 14);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
