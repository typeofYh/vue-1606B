<template>
    <div class="detail">
        <span class="back" @click="$router.back()"><</span>
        <div class="detail-main">
            <h2>{{res.title}}</h2>
            <p>{{res.text}}</p>
            <button @click="addlike" v-text="islike?'已收藏':'点击收藏'"></button>
            <p v-if="open">收藏成功</p>
        </div>
    </div>
</template>
<script>
import axios from "axios";
let storage = window.localStorage;
let list = JSON.parse(storage.getItem('like')) || [];
export default {
    props:['remmendid'],
    data(){
        return{
            res:{},
            islike:list.some(item=>item.id===this.remmendid),
            open:this.islike //提示
        }
    },
    created(){
        axios.get('/api/detail?remmendid='+this.remmendid).then(res=>{
            this.res  = res.data;
        });
    },
    methods:{
        addlike(){
            this.islike = !this.islike;
            this.open = this.islike;
            if(this.open){
                //要添加收藏
                list.push({
                    id:this.remmendid,
                    title:this.res.title
                });
                storage.setItem('like',JSON.stringify(list));
            }else{
                //取消收藏
                list = list.filter(item=>item.id !== this.remmendid);
                storage.setItem('like',JSON.stringify(list));
            }
            setTimeout(()=>{
                this.open = false;
            },1000)
        }
    }
}
</script>

<style>
    .detail{
        position: fixed;
        top:0;
        left:0;
        bottom: 0;
        right: 0;
        background: #000;
        color:#fff;
        z-index: 100;
    }
    .v-enter{
        left:100%;
    }
    .v-enter-active,.v-leave-active{
        transition: left .8s;
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

