<template>
   <section class="src-components-formulario-av">
      <div class="jumbotron">
         <h1>Formulario con Vue-Form</h1>

         <vue-form :state="formstate" @submit.prevent="enviarDatos">
            <validate tag="div">
               <label for="nombre">Nombre</label>
               <input
                  type="text"
                  id="nombre"
                  class="form-control"
                  autocomplete="off"
                  v-model.trim="formData.nombre"
                  name="nombre"
                  required
                  :minlength="nombreMinLen"
                  :maxlength="nombreMaxLen"
                  no-espacios
               />

               <field-messages name="nombre" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                     El nombre es un campo requerido
                  </div>
                  <div slot="minlength" class="alert alert-danger mt-1">
                     El nombre tiene que tener minimo
                     {{ this.nombreMinLen }} caracteres.
                  </div>
                  <div slot="maxlength" class="alert alert-danger mt-1">
                     El nombre tiene que tener maximo
                     {{ this.nombreMaxLen }} caracteres.
                  </div>
                  <div slot="no-espacios" class="alert alert-danger mt-1">
                     Ingrese su nombre sin espacios.
                  </div>
               </field-messages>
            </validate>

            <br />

            <validate tag="div">
               <label for="edad">Edad</label>
               <input
                  type="number"
                  id="edad"
                  class="form-control"
                  v-model.number="formData.edad"
                  name="edad"
                  required
                  :min="edadMin"
                  :max="edadMax"
               />

               <field-messages name="edad" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                     La edad es un campo requerido
                  </div>
                  <div slot="min" class="alert alert-danger mt-1">
                     La edad debe ser mayor a {{ this.edadMin }} años.
                  </div>
                  <div slot="max" class="alert alert-danger mt-1">
                     La edad debe ser menor a {{ this.edadMax }} años.
                  </div>
               </field-messages>
            </validate>

            <br />

            <validate tag="div">
               <label for="email">Email</label>
               <input
                  type="email"
                  id="email"
                  class="form-control"
                  autocomplete="off"
                  v-model.trim="formData.email"
                  name="email"
                  required
               />

               <field-messages name="email" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                     El email es un campo requerido
                  </div>
                  <div slot="email" class="alert alert-danger mt-1">
                     Ingrese un mail valido
                  </div>
               </field-messages>
            </validate>

            <button
               class="btn btn-success my-3"
               type="submit"
               :disabled="formstate.$invalid"
            >
               Enviar
            </button>
         </vue-form>
         <hr />
         <div class="table-responsive">
            <table class="table table-dark">
               <tr>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Email</th>
               </tr>
               <tr>
                  <td>{{ formData.nombre }}</td>
                  <td>{{ formData.edad }}</td>
                  <td>{{ formData.email }}</td>
               </tr>
            </table>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   name: "src-components-formulario-av",
   props: [],
   mounted() {},
   data() {
      return {
         formstate: {},
         formData: {
            nombre: null,
            edad: null,
            email: null,
         },
         nombreMinLen: 5,
         nombreMaxLen: 25,
         edadMin: 18,
         edadMax: 120,
      };
   },
   methods: {},
   computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
   background-color: brown;
   color: #f1f1f1;
}

hr {
   background-color: #bbb;
}

pre {
   color: #f1f1f1;
}
</style>
