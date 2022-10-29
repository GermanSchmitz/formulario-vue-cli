<template>
   <section class="src-components-http-client">
      <div class="jumbotron">
         <h1>Componente HttpClient</h1>
         <hr />
         <hr />
         <br />

         <button class="btn btn-warning my-3 mr-3" @click="getPostsXHRCb()">
            Pedir XHR (cb)
         </button>

         <div class="table-responsive">
            <table class="table table-dark">
               <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Email</th>
               </tr>
               <tr v-for="post of posts" :key="post.id">
                  <td>{{ post.id }}</td>
                  <td>{{ post.name }}</td>
                  <td>{{ post.edad }}</td>
                  <td>{{ post.email }}</td>
               </tr>
            </table>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   name: "src-components-http-client",
   props: [],
   mounted() {},
   data() {
      return {
         url: "https://635abeee6f97ae73a6357d2f.mockapi.io/posts",
         posts: [],
      };
   },
   methods: {
      getPostsXHRCb() {
         let XHR = new XMLHttpRequest();
         XHR.open("get", this.url);

         XHR.addEventListener("load", () => {
            if (XHR.status == 200) {
               const respuesta = JSON.parse(XHR.response);
               this.posts = respuesta;
            }
         });

         XHR.send();
      },
   },
   computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
   background-color: darkslateblue;
}

h1 {
   color: #f1f1f1;
}
</style>
