<template>
  <div class="header-container">
    <img class="header-logo" src="../assets/logo.png"/>
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
    height: 50px;
    background: lightgoldenrodyellow;
    text-align: center;
  }

  .header-logo {
    height: 100%;
  }

  .header-contact {
    position: absolute;
    right: 110px;
    top: 15px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
