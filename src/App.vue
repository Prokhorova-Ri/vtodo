<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
@import "../node_modules/materialize-css/dist/css/materialize.min.css";
</style>
