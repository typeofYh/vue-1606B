<template>
    <div class="swiper-container slideup">
        <img src="../../../static/images/icon1.png" alt="">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="val in slidedata">
                {{val.title}}
            </li>
        </ul>
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
    name:"",
    props:['slidedata'],
    data(){
        return {

        }
    },
    mounted(){
        new Swiper('.slideup',{
            direction:'vertical'
        })
    }
}
</script>
<style>
    .slideup{
        height: 100px;
    }
</style>


