<template>
  <div class="header-container">
    <img class="header-logo" src="../assets/logo.png" />
    <label class="header-contact">Contact</label>
  </div>
</template>

<script>
export default {
  name: "Header"
};
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
    padding: 9px;
    height: 80%;
    vertical-align: middle;
     margin: 0;
  }

  .header-contact {
    position: absolute;
    right: 110px;
    top: 15px;
    font-weight: bold;
    cursor: pointer;
  }
</style>
