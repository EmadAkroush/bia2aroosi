<script  setup>
let items = [
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
  },
]
let rating = 4;
</script>
<template>
  <div>
    <v-row class="order-price mx-8 mt-12 ">
      <v-col class="col-9" color="#333333">
        <h1> مزون فابرا </h1>
        <ul class="mt-1 d-flex align-center">
          <li> بیا تو عروسی <v-icon color="#FEC128"> mdi-chevron-left </v-icon>
          </li>
          <li> تهران <v-icon color="#FEC128"> mdi-chevron-left </v-icon>
          </li>
          <li>تالار عروسی <v-icon color="#FEC128"> mdi-chevron-left </v-icon>
          </li>
          <li> مزون فابرا </li>
        </ul>
      </v-col>
      <v-col class="col-3 d-flex justify-end">
        <v-row>
          <v-col class="d-flex justify-end ">
            <v-card elevation="0" height="79" width="146" class="card">
              <p> امتیاز شما </p>
              <div class="d-flex justify-center align-center">
                <v-rating v-model="rating" background-color="#FFFA64" color="#FFFA64" length="5" size="24"></v-rating>
              </div>
            </v-card>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-card elevation="0" height="79" width="146">

              <p> <span> امتیاز مجموعه </span> <span>27</span> </p>
              <p class="sum-p d-flex align-center justify-center"> <span>4.2</span> <span>
                  <v-rating class="mb-2" v-model="rating" background-color="#FFFA64" color="#FFFA64" length="1"
                    size="24">
                  </v-rating>
                </span> </p>

            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="order-price-main mx-8 pb-3">
      <v-col class="col-6 col-main ">
        
        <v-carousel delimiter-icon="12  " height="315"  class="slider ">
          <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
            transition="fade-transition"></v-carousel-item>
        </v-carousel>
        <div>
          <v-btn depressed   height="32"  class="ml-3 btn my-3 btn-under"  >
              <router-link to="/" class="link-price-under "> تهران </router-link>
            </v-btn>
            <v-btn depressed  height="32"  class="ml-3 btn my-3 btn-under"  >
              <router-link to="/" class="link-price-under "> تالارعروسی  </router-link>
            </v-btn>
            <v-btn depressed   height="32"  class="ml-3 btn my-3 btn-under"  >
              <router-link to="/" class="link-price-under "> شرق تهران </router-link>
            </v-btn>
        </div>
      </v-col>
      <v-col class="col-6 col-main ">
        <v-card elevation="0" class="pa-5 card-datails " height="315">
          <p class="p-top-header"><span>
              <v-icon color="#CCCCCC"> mdi-map-marker-outline </v-icon>
            </span> <span>آدرس</span> </p>
          <p class="p-header"> سعادت آباد, میدان کاج , ابتدای سرو شرقی , پلاک 155 , واحد 3 </p>
          <p class="p-top-header pt-2"> <span>
              <v-icon color="#CCCCCC"> mdi-account-box </v-icon>
            </span> <span > بیاتو عروسی در فضای مجازی </span> </p>

          <v-row>
            <v-col class="col-3">
              <v-row>
                <v-col class="col-up  d-flex align-center justify-center">
                  <div class="col-icon d-flex align-center justify-center">
                  <v-icon size="18" color="white"> mdi-instagram </v-icon>
                </div>
                </v-col>
                <v-col class="col-up  d-flex align-center justify-center">
                  <div class="col-icon d-flex align-center justify-center">
                  <v-icon size="18" color="white"> mdi-whatsapp </v-icon>
                </div>
                </v-col>
                <v-col class="col-up  d-flex align-center justify-center">
                  <div class="col-icon d-flex align-center justify-center">
                  <v-icon size="18" color="white"> mdi-linkedin </v-icon>
                </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <p class="p-top-header pt-4"> بیاتو عروسی هیچ گونه منفعت یا مسئولیتی در قبال نحوه عملکرد <br>
            .مزون لباس عروس ندارد <router-link to="/" class="link-main"> راهنمای انتخاب من </router-link>
          </p>
          <v-btn depressed color="primary" min-width="99" height="48" class="btn">
              <router-link to="/" class="link-price-right right"> درخواست قیمت  </router-link>
            </v-btn>
            <v-btn depressed color="primary" min-width="99" height="48" outlined class="mr-4 btn"  >
              <router-link to="/" class="link-price-left"> نمایش اطلاعات تماس </router-link>
            </v-btn>
        </v-card>

      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss">
.order-price {
  .v-rating .v-icon {
    padding: 0;
  }

  p {
    text-align: center;
    margin: 10px 0;
    color: #999999;
    font-weight: 500;
    font-size: 12px;
    line-height: 18.6px;
  }

  .sum-p {
    text-align: center;
    margin: 10px 0;
    color: #333333;
    font-weight: 600;
    font-size: 20px;
    line-height: 30.96px;

  }

  li {
    display: inline;
  }

  .card {
    border-radius: 8px !important;

  }


}

.order-price-main {
  .v-window {
    border-radius: 21px;
  }

  .v-carousel__controls {
    height: 61px;

  }

  .card-datails {
    border-radius: 16px;
  }

  .col-main {
    padding: 0 !important;
    margin-bottom: 10px !important;
    
  }
  .link-price-right{
    color: white !important;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
  }
  .link-price-left{
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 21.7px;
    
  }
  .link-price-under{
    text-decoration: none;
    font-weight: 500;
    font-size: 17px;
    line-height: 17px;
  }
  .btn{
    border-radius: 12px !important;
  }
  .p-top-header{
    color: #CCCCCC;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;


  }
  .link-main{
    color: #71D0F9;
  }
  .p-header{
    color: #666666;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
  }
  .col-icon{
    width: 24px !important;
    height: 24px !important;
    background-color: #666666;
    border-radius: 25px;
  }
  .col-up{
    padding: 12px 0 !important;
  }
  .btn-under{
    border-radius: 40px !important;
    background-color: rgba(254, 193, 40, 0.16) !important;
  }
}
</style>