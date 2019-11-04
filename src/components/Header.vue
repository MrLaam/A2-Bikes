<template>
  <div class="header-container">
    <img class="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"/>
    <label class="header-contact">Contact</label>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header-container {
    width: 100%;
    height: 70px;
    background: #0081cf;
    text-align: center;
  }

  .header-logo {
    height: 60%;
    padding-top: 15px;
  }

  .header-contact {
    position: absolute;
    right: 110px;
    top: 15px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
