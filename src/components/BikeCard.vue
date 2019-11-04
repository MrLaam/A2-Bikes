<template>
  <div class="card-container">
    <div class="bike-image-container">
      <span class="helper"></span>
      <img :src="bike.img" />
    </div>
    <div class="bike-info-container">
      <h3>{{bike.make}} {{bike.model}}</h3>
      <p>RRP £{{bike.price}}</p>
      <p>{{bike.power}}hp</p>
      <p>0-60 in {{bike.maxSecsTo60}}s</p>
      <p>{{bike.engineType}}</p>
      <p>{{bike.bikeType}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BikeCard",
  props: ["bike"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-container {
  border: 1px solid #d3d3d3;
  display: flex;
  padding-bottom: 8px;
}

.bike-image-container {
  flex: 1;
  text-align: center;
}

.bike-image-container img {
  height: 175px;
  vertical-align: middle;
}

.bike-info-container {
  flex: 1;
  text-align: center;
}

.helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}
</style>
