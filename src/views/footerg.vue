<script  setup>

</script>
<template>
  <div>
    <v-footer class="up-footer mt-16 ">

      <v-row class="up1 ">

        <v-col>
          <v-row class="up2 mb-8">
            <v-container fluid class="mx-8">
              <v-col>
                <h1 class="mt-8"> تهران </h1>
                <ul class="list-footer-ve mt-6">
                  <li class="ma-3"> تالارعروسی در تهران <v-icon class="mr-3" color="#FFFA64" size="14">
                      mdi-checkbox-blank-circle </v-icon>
                  </li>
                  <li class="ma-3"> باغ تالار در تهران <v-icon class="mr-3" color="#FFFA64" size="14">
                      mdi-checkbox-blank-circle </v-icon>
                  </li>
                  <li class="ma-3"> آتلیه عروس در تهران <v-icon class="mr-3" color="#FFFA64" size="14">
                      mdi-checkbox-blank-circle </v-icon>
                  </li>
                  <li class="ma-3"> سالن زیبایی در تهران <v-icon class="mr-3" color="#FFFA64" size="14">
                      mdi-checkbox-blank-circle </v-icon>
                  </li>
                  <li class="ma-3"> آرایشگاه داماد در تهران <v-icon class="mr-3" color="#FFFA64" size="14">
                      mdi-checkbox-blank-circle </v-icon>
                  </li>
                  <li class="ma-3"> تشریفات مجالس در تهران </li>
                </ul>
                <div class="my-8 d-flex justify-center">
                  <v-btn depressed color="primary" min-width="99" height="48" outlined class="mr-4 btn ">
                    <router-link to="/" class="link"> نمایش بیشتر </router-link>
                  </v-btn>
                </div>
              </v-col>
            </v-container>
          </v-row>
          <v-row class="main-footer">
            <v-container fluid class="mx-8">
              <v-col>
                <v-row class="row-in">
                  <v-col class="col-main">
                    <a> <img class="logo-img " src="../../public/img/bia2aroosi-logo-desktop 1.png"></a>
                    <v-row class="row-icon mt-6 ">
                      <v-col class="col-7">
                        <v-row>
                          <v-col class=" col-up  d-flex align-center justify-center">
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
                  </v-col>
                  <v-col class="col-main">
                    <h1 class="pb-3"> ارتباط با ما </h1>
                    <v-divider></v-divider>
                    <ul class="list-footer">
                      <li>
                        <router-link to="/" class="link-list-footer"> تماس با ما </router-link>
                      </li>
                      <li>
                        <router-link to="/" class="link-list-footer"> ثبت شکایت </router-link>
                      </li>
                    </ul>
                  </v-col>
                  <v-col class="col-main">
                    <h1 class="pb-3"> چرا بیا تو عروسی؟ </h1>
                    <v-divider></v-divider>
                    <ul class="list-footer">
                      <li>
                        <router-link to="/" class="link-list-footer"> درباره بیاتوعروسی </router-link>
                      </li>
                      <li>
                        <router-link to="/" class="link-list-footer"> مجله بیاتو عروسی </router-link>
                      </li>
                      <li>
                        <router-link to="/" class="link-list-footer"> مطالب عروسی </router-link>
                      </li>

                    </ul>
                  </v-col>
                  <v-col class="col-main">
                    <h1 class="pb-3"> بیشتر بدانید </h1>
                    <v-divider></v-divider>
                    <ul class="list-footer">
                      <li>
                        <router-link to="/" class="link-list-footer"> پکیج ها </router-link>
                      </li>
                      <li>
                        <router-link to="/" class="link-list-footer"> ویدیو </router-link>
                      </li>
                      <li>
                        <router-link to="/" class="link-list-footer"> قوانین مقررات </router-link>
                      </li>
                    </ul>
                  </v-col>
                  <v-col class="col-main">
                    <h1 class="pb-3"> بیشتر </h1>
                    <v-divider></v-divider>
                    <ul class="list-footer">
                      <li>
                        <router-link to="/" class="link-list-footer"> درخواست ثبت مجموعه </router-link>
                      </li>
                      <li>
                        <router-link to="/" class="link-list-footer"> برچسب ها </router-link>
                      </li>

                    </ul>
                  </v-col>
                  <v-col class="col-main ">
                    <div class="col-main-nemad d-flex justify-space-between">
                    <a> <img class="logo-img-nemad pa-1 " src="../../public/img/enamad.png"></a>
                    <a> <img class="logo-img-nemad pa-1" src="../../public/img/ecunion.png"></a>
                  </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-container>
          </v-row>

        </v-col>

      </v-row>

    </v-footer>
  </div>
</template>
<style lang="scss">
.up-footer {
  .row-in{
    margin-bottom: 25px;

  }
  .logo-img-nemad{
    width: 47.84px;
    height: 52px;
    border: 1px solid #FEC128;
    border-radius: 8px;
  }
  .main-footer{
    border-top: 2px solid #FFFA64;
    background-image: url('../../public/img/Rectangle3.png');
    background-position-y: bottom;
        background-position-x: 95%;
  }
  .col-main{
    margin-top: 60px;
    
  }
  
  .link-list-footer {
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: #666666;
    text-decoration: none;
  }

  .v-divider {
    width: 90px;
    color: #FFFA64;
    background-color: #FFFA64;
  }

  h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 31px;
    color: #333333;
  }

  .list-footer li {
    list-style-type: none;
    padding: 12px 0 !important;
  }

  

  .col-icon {
    width: 24px !important;
    height: 24px !important;
    background-color: #FEC128;
    border-radius: 25px;


  }

  .col-up {
    padding: 0;
  }

  .link {
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: #F39200;
  }

  .list-footer-ve li {
    display: inline;

  }

  padding: 0 !important;

  .up1 {
    background-color: white;
    border-top: 1px solid #FFFA64 !important;

  }

  .up2 {
    height: 224px !important;

  }
  .col-main-nemad{
    width: 130px;

  }

}
</style>