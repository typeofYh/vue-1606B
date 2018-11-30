<template>
    <swiper :options="swiperops">
        <swiper-slide v-for="val in banner">
            <img :src="'../static/images/'+val.url" :style="{width:'100%'}">
        </swiper-slide>
    </swiper>
</template>
<script>
import {swiper,swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";
export default {
    name:"swiperParent",
    props:['banner'],
    components:{
        swiper,
        swiperSlide
    },
    data(){
        return{
            swiperops:{
                effect:"fade",
                loop:true,
                autoplay:true
            }
        }
    }
}
</script>


