import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


import App from '../imports/ui/App'

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
});