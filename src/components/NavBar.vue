<template>
   <section class="src-components-nav-bar">
      <h1></h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <router-link to="/">
            <a class="navbar-brand" href="#">TP4</a>
         </router-link>
         <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
         >
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <router-link to="formulario">
                     <a class="nav-link" href="#">Formulario</a>
                  </router-link>
               </li>
               <li class="nav-item">
                  <router-link to="http-client">
                     <a class="nav-link" href="#">DatosXMLHttp</a>
                  </router-link>
               </li>
            </ul>
         </div>
      </nav>
   </section>
</template>

<script>
export default {
   name: "src-components-nav-bar",
   props: [],
   mounted() {},
   data() {
      return {};
   },
   methods: {},
   computed: {},
};
</script>

<style scoped lang="css">
</style>
