<script setup lang="ts">
import titlebar from './views/titlebar.vue'
import ourtor from './views/about.vue'
import  useRouter   from 'vue-router';

</script>

<template>
  <v-app class="main-font">
    <v-container fluid>
<v-main>
  <titlebar>

  </titlebar>
<router-view></router-view>
    
   

  </v-main>
</v-container>
 
  </v-app>
  
</template>

<style>
@font-face {
  font-family: Iran-yekan;
  src: url(../public/fonts/IRANYekan/IRANYekan/WebFonts/fonts/woff2/IRANYekanWebLight.woff2);
}
.main-font {
  font-family: Iran-yekan !important;
  
}
.theme--light.v-application {
  background-color: #F5F5F5 !important;
}
</style>
