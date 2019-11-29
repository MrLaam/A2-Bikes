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
  margin: 10px 0 10px;
}

.bike-image-container img {
  width: 90%;
  height: auto;
  vertical-align: middle;
}

.bike-info-container {
  flex: 1;
  text-align: center;
  font-size: 0.85vw;
}

.helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}

@media (min-width: 2000px) {
  .bike-info-container {
    font-size: 0.75vw;
  }

  .bike-image-container img {
    max-height: 220px;
    width: auto;
  }

}

</style>
