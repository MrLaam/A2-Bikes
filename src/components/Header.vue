<template>
  <div class="header-container">
    <h1 class="header-logo">A2 Bikes</h1>
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
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: black;
    vertical-align: middle;
    padding-top: 15px;
    padding-bottom: 15px;
     margin: 0
  }

  .header-contact {
    position: absolute;
    right: 110px;
    top: 15px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
