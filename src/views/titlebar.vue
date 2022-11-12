<script setup lang="ts">
import { ref } from 'vue-demi';
var drawer = ref(false)

</script>

<template>
  <div>

    <v-app-bar color="#F5F5F5" height="112" elevation="0" dense light>
      <v-row>
        <v-col class="col-8">
          <nav>
            <ul class="main-menu pb-4 d-flex align-center">

              <li class="li-logo">
                <a> <img class="logo-img " src="../../public/img/bia2aroosi-logo-desktop 1.png"></a>
              </li>
              <li>
                <router-link to="/" class="link-header"> خدمات ما</router-link>
              </li>
              <li>
                <router-link to="/" class="link-header"> درباره ما</router-link>
              </li>
              <li>
                <router-link to="/" class="link-header">  تماس با ما</router-link>
              </li>
            </ul>

          </nav>
        </v-col>
        <v-col class="col-4 d-flex justify-end pl-9 title-bare-btn">
          
            <v-btn depressed color="primary" min-width="99" height="48" class="btn">
              <router-link to="/" class="link-header right"> ثبت آگهی </router-link>
            </v-btn>
            <v-btn depressed color="primary" min-width="99" height="48" outlined class="mr-4 btn"  >
              <router-link to="/" class="link-header"> ثبت نام/ورود </router-link>
            </v-btn>
        
        </v-col>
      </v-row>



    </v-app-bar>
  </div>
</template>
<style lang="scss" >
.main-menu {
  background-color: #F5F5F5;
  list-style-type: none;

  li {
    display: inline;
    margin: 0 35px 0 35px;

  }

  li .link-header {
    color: #666666 !important;
    font-weight: 700;
    font-size: 20px;
    text-decoration: none;
  }

  .logo-img {
    width: 120px;
    height: 36px;
  }


}
.title-bare-btn{
  .btn{
    border-radius: 12px;
  }
   .btn .link-header{
    width: 99px !important;
    font-weight: 700;
    font-size: 14px;
    line-height: 21.7px;
    text-decoration: none;
   }
   .right{
    color: white;
   }

}
</style>