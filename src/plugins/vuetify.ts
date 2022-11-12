// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify )

const opts = {}

export default new Vuetify({
    rtl: true, 
    icons: {
        iconfont: 'mdiSvg' || 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
      },
      theme: {
        themes: {
          light: {
            primary: '#F39200',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
            inputmy: '#FFFFFF',
          },
        },
      },
    
  })