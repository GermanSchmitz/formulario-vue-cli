<template>
   <div id="app" class="container-fluid">
      <h1><center>TP4 con vue-router, vue-form y XMLHttpRequest</center></h1>
      <NavBar />
      <router-view>
        
      </router-view>
   </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
   name: "App",
   components: {
      NavBar,
   },
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
</style>
