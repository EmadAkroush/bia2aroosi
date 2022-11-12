<script  setup>

</script>
<template>
    <div>
        <v-row class="mx-8 about">
            <v-col class="col-8">
                <v-row>
                    <v-col>
                        <h1> درباره مزون فابرا </h1>
                        <div class="mt-4 content-div">
                            <p> مزون لباس عروس لباس عقد و لباس مجلسی فابرا </p>
                            <p> برند فابرا با بیش از 25 سال سابقه فعالیت از بهترین ها و با تجربه ترین های ایران هستند
                            </p>
                            <p> فابرا مجموعه کاملی از لباس های آماده عروس مجلسی و نامزدی بله برون عقد و فرمالیته است و
                                البته<br> امکان سفارش دوخت رو هم برای شما عزیزان دارند </p>
                            <p> علاوه بر این ست کاملی از اکسسوری های لباسی که انتخاب می کنید رو هم آماده دارند </p>
                            <P> مزون لباس عروس لباس عقد و لباس مجلسی فابرا </P>
                            <p> برند فابرا با بیش از 35 سال سابقه فعالیت از بهترین ها و باتجربه ترین های ایران هستند
                            </p>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="mt-10">
                    <v-col class="col-contact-us pa-6 ">
                        <v-form>
                            <div class="up">
                                <v-text-field prepend-inner-icon="mdi-account-outline " color="#ffffff" flat outlined
                                    label="نامتان را وارد کنید">
                                </v-text-field>
                            </div>
                            <div class="down">
                                <v-textarea label="متن توضیحتان را وارد فرمایید" color="white" flat outlined
                                    prepend-inner-icon="mdi-message-alert-outline  "></v-textarea>
                            </div>
                            <v-btn depressed color="white" min-width="99" height="48" class="mr-4 btn">
                                <router-link to="/" class="link"> ارسال نظر </router-link>
                            </v-btn>

                        </v-form>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="col-comment mb-3 pt-6  px-6 ">

                        <v-card v-for="item in 4" class=" mx-auto card-comment mb-3" height="98px" max-width="100%"
                            outlined>
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="text-overline mb-2 d-flex justify-space-between">
                                        <diV> <span class="name"> امیر اسدی </span> <span class="date"> 2 روز پیش
                                            </span> </diV>
                                        <div class="replay">
                                            <v-icon color="#CCCCCC"> mdi-replay </v-icon> پاسخ
                                        </div>
                                    </div>

                                    <v-list-item-subtitle>
                                        <p> نمیدونم چه جوری این مزونو توصیف کنم خانم ابراهیمی و دخترای گلشون با اخلاقای
                                            خوبشون خیلی توی اون همه استرس قبل عروسی بهم <br> آرامش دادن از لباسم هم که
                                            هرچی بگم کم گفتم هرکی منو میدید میگفت مبارک باشه لباستو از کجا گرفتی😂 </p>
                                    </v-list-item-subtitle>
                                </v-list-item-content>


                            </v-list-item>


                        </v-card>
                        <div class="d-flex justify-center my-6">
                        <v-btn depressed color="primary" height="48" outlined class=" btn">
                            <router-link to="/" class="link"> نمایش بیشتر </router-link>
                        </v-btn>
                    </div>
                    </v-col>
                </v-row>

            </v-col>
            <v-col class="col-4 about-left">
                <v-card elevation="0" height="470px" class="pa-6 ">
                    <h1 class="mb-2"> پیام به مزون فابرا </h1>
                    <v-divider></v-divider>
                    <v-form class="mt-6">
                        <v-text-field prepend-inner-icon="mdi-account-outline" background-color="#F7F7F7" color="#999999"
                            label="نامتان را وارد کنید" class="  " height="48px" solo flat>
                        </v-text-field>
                        <v-text-field prepend-inner-icon="mdi-cellphone " background-color="#F7F7F7" color="#999999"
                            label="شماره همراهتان را وارد کنید" class="  " height="48px" solo flat>
                        </v-text-field>
                        <v-textarea prepend-inner-icon="mdi-message-alert-outline" background-color="#F7F7F7" color="#999999"
                            label="متن توضیحاتتان را وارد کنید" class="  " height="144px" solo flat>
                        </v-textarea>
                        <v-btn depressed color="primary" width="100%" height="48" class="btn">
                            <router-link to="/" class="link-about"> ارسال پیام </router-link>
                        </v-btn>
                    </v-form>

                </v-card>

            </v-col>
        </v-row>

    </div>
</template>
<style lang="scss">
.about {
    .col-comment {
        width: 100%;
        background-color: white !important;
        height: auto;
        border-radius: 0 0 16px 16px;
        .link {
            font-weight: 700;
            font-size: 14px;
            line-height: 22px;
            /* identical to box height */
            
            text-align: right;

            /* primary dark */

            color: #F39200;
        }
    }

    .card-comment {
        .replay {
            color: #CCCCCC !important;
            font-weight: 500;
            font-size: 12px;
            line-height: 19px;

        }

        .name {
            font-weight: 500;
            font-size: 12px;
            line-height: 19px;
            color: #999999;
        }

        .date {
            font-weight: 500;
            font-size: 8px;
            line-height: 12px;
            color: #CCCCCC;
        }

        p {
            font-weight: 500;
            font-size: 12px;
            line-height: 19px;
            color: #666666 !important;

        }
    }

    .content-div {
        color: #666666;
        font-weight: 500;
        font-size: 16px;
        line-height: 25px;

    }

    .col-contact-us {
        height: 320px;
        background-color: #F39200;
        border-radius: 16px 16px 0px 0px;
        background-image: url('../../public/img/Rectangle\ 20\ .png');
        background-position-y: bottom;
        background-position-x: 20px;
    }



    .v-input__slot fieldset {
        color: #ffffff !important;
    }

    .v-input__slot {
        border-radius: 12px !important;
    }

    .btn {
        border-radius: 12px;


    }

    .link-about {
        text-decoration: none !important;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        color: white;
    }

    .link {
        text-decoration: none !important;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
    }

    .up {
        .v-input__slot {
            width: 277px;
            height: 48px;
        }

        .v-icon {
            color: #ffffff;
        }

        .v-label {
            color: #ffffff !important;
        }

    }

    .down {
        .v-input__slot {
            width: 554px;
            height: 96px;
        }

        .v-text-field.v-text-field--enclosed .v-text-field__details {
            margin-bottom: 0;
        }

        .v-icon {
            color: #ffffff;
        }

        .v-label {
            color: #ffffff !important;
        }
    }

    .card-comment {
        border: 1px solid #FEC128;
        border-radius: 20px 0px 20px 20px;
    }


}

.about-left {
    .v-text-field.v-text-field--enclosed .v-text-field__details {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-weight: 700;
        font-size: 20px;
        line-height: 31px;
        text-align: center;

    }
}
</style>