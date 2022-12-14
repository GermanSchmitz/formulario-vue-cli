import Vue from 'vue'
import VueForm from 'vue-form'

const options = {
    validators: {
        'no-espacios': (value) => {
            return !value.includes(' ')
        }
    }
}

Vue.use(VueForm, options)