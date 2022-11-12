<script lang="ts" setup>

</script>
<template>
  <div>
    <v-form>
      <v-card height="80px" class="mx-9  search-header-card d-flex align-center">
        <v-row>

          <v-col cols="5">
            <v-text-field prepend-inner-icon="mdi-magnify" background-color="#F7F7F7" color="#999999"    
              label="در بیاتو عروسی جستجو کنید"  class="py-4 pr-4 pl-0 mt-8 input" id="input" height="48px" solo flat>
            </v-text-field>
          </v-col>
          <v-col cols="3">
            <v-select
            prepend-inner-icon="mdi-magnify" background-color="#F7F7F7" color="#999999"
              label="انتخاب شهر"  class="py-4 mt-8 input" id="input" height="48px" solo flat
           
        ></v-select>

          </v-col>
          <v-col cols="3">
            <v-select
            prepend-inner-icon="mdi-map-marker-outline" background-color="#F7F7F7" color="#999999"
              label="انتخاب شهر"  class="py-4 mt-8 input" id="input" height="48px" solo flat
           >
          </v-select>
           
          </v-col>
          <v-col  cols="1">
            <v-btn depressed color="primary" height="48" outlined class="py-4 mt-12 ml-1 btn"  >
              <router-link to="/" class="link-search">جستجو</router-link>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>

    </v-form>
  </div>
</template>
<style lang="scss" >
.search-header-card {
  border-radius: 16px !important;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08) !important;
  .v-input__slot{
    border-radius: 12px !important;
  }

  #input {
    font-weight: 500 !important;
    font-size: 14px !important;
    line-height: 21.7 !important;
    

  }

  .v-icon {
    color: #999999;
  }
  .btn{
    width: 80px !important;
    border-radius: 12px !important;
  }
  .link-search{
    text-decoration: none;
  }
}

</style>