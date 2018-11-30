<template>
    <div class="remmend">
        <div class="remmend-cont">
            <swiper-parent :banner="banner"></swiper-parent>
            <div>
                <h1 class="title">热门歌单推荐</h1>
                <remmend-list v-for="val in list" :data="val">
                    <p>{{val.info}}</p>
                </remmend-list>
            </div>
        </div>
       
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import swiperParent from "@/components/swiperParent";
import remmendList from "@/components/remmend-list";
import axios from "axios";
export default {
    name:"remmend",
    components:{
        swiperParent,
        remmendList
    },
    data(){
        return{
            banner:[],
            list:[],
            time:Date.now()
        }
    },
    mounted(){
        axios.get('/banner').then(data=>{
            this.list = data.data.list
            this.banner = data.data.banner;
        })
    }
}
</script>
<style>
.title{
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    padding:10px 0;
}
.v-enter{
    left:100%;
}
.v-enter-active,.v-leave-active{
    transition: left 2s;
}
.v-enter-to{
    left:0;
}
.v-leave{
    left:0;
}
.v-leave-to{
    left:100%;
}
</style>


