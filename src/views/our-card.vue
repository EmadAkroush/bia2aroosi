<script  setup>

</script>
<template>
    <div>
        <v-row class="our-card mx-8  mt-12">
            <v-col v-for="item in 8" class="col-6">
                <v-card class="card-inside " width="100%">
                    <v-row>
                        <v-col class="col-4 col-card">
                            <v-img class="img white--text align-end" height="100%"
                                src="../../public/img/Rectangle 41.png">
                                <div class="top-vip d-flex align-center justify-center">
                                    <span> <v-icon color="#FFFA64" size="14" class="mb-1"> mdi-star-settings </v-icon>  </span>       <span  >Top-Vip</span> 
                                </div>
                            </v-img>
                        </v-col>
                        <v-col class="col-8 col-card">
                            <v-card-subtitle class="pb-0">
                                <P class="p-subtitle"> 2 روز پیش </P>
                            </v-card-subtitle>

                            <v-card-text class="text--primary">
                                <div>
                                    <p class="title"> استودیو آریامکس </p>
                                </div>

                                <div>
                                    <p class="content">
                                        منوی اقتصادی ویژه سپنتا فیلمبرداری دو دوربین Full Hd میکس و مونتاژ حرفه ای وساخت
                                        چندین کلیپ عکسبرداری و فیلمبرداری در
                                    </p>
                                </div>
                                <div class="d-flex justify-space-between">
                                    <div>
                                        <v-btn depressed height="22" class="ml-3 btn my-3 btn">
                                            <router-link to="/" class="link "> آتلیه </router-link>
                                        </v-btn>
                                        <v-btn depressed height="22" class="ml-3 btn my-3 btn">
                                            <router-link to="/" class="link "> تهران </router-link>
                                        </v-btn>
                                    </div>
                                    <div class="d-flex align-center div-icon ">
                                        <div class="d-flex align-center mx-1"> 27 <v-icon color="#999999" size="14"
                                                class="mr-1"> mdi-comment-text-outline </v-icon>
                                        </div>
                                        <div class="d-flex align-center mx-1"> 4.2 <v-icon color="#999999" size="14"
                                                class="mr-1"> mdi-star-settings-outline</v-icon>
                                        </div>

                                    </div>

                                </div>
                            </v-card-text>

                            <v-card-actions class="mb-4">
                                <v-btn depressed color="primary" height="38px" width="130px" class="btn-down ">
                                    <router-link to="/" class="link-btn"> درخواست قیمت </router-link>
                                </v-btn>
                                <div class="frame mr-4 d-flex align-center justify-center">
                                    <v-icon color="#999999"> mdi-tag-outline </v-icon>
                                </div>

                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<style lang="scss">
.our-card {
    .col-card {
        padding: 8px 0px;
    }

    .card-inside {
        .top-vip {
            background: #333333;
            opacity: 0.6;
            border-radius: 0px 16px;
            width: 80px;
            height: 24px;
            position: absolute;
            top: 0;
            color: #FFFA64;
            font-weight: 500;
font-size: 12px;
line-height: 19px;
        }

        p {
            margin-bottom: 4px;
        }

        .content {
            font-weight: 500;
            font-size: 14px;
            line-height: 22px;
            color: #666666;
        }

        .title {
            color: #333333;
        }

        .frame {
            width: 38px;
            height: 38px;
            background: #F7F7F7;
            border-radius: 10px;
        }

        .btn-down {
            padding: 17px 24px 16px;
            background: #F39200;
            border-radius: 10px;

        }

        .div-icon {
            color: #999999;
        }

        .btn {
            width: 34px;
            height: 22px;

            background: #FFF5DD;
            border-radius: 40px;
        }

        .link {
            text-decoration: none;

        }

        .link-btn {
            text-decoration: none;
            font-weight: 700;
            font-size: 12px;
            line-height: 22px;
            color: #FFFFFF;
        }
    }

    .img {
        border-radius: 0 16px 16px 0;
    }

    .p-subtitle {
        font-size: 8px;
        line-height: 12px;
        text-align: right;

        /* silver-30 */

        color: #999999;
    }

    .card-inside {
        border: 2px solid #FFFA64;
        border-radius: 16px;
    }
}
</style>