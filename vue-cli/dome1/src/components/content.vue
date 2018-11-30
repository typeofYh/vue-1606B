<template>
    <main class="main">
        <nav>
            <a v-for="(val,index) in navcont" href="javascript:;">
                <img :src="'../../static/images/'+val.url">
                <span>{{val.title}}</span>
            </a>
        </nav>
        <slideup :slidedata="slideup"></slideup>
        <findhot :findhotdata="findhot">
            <h2>发现热门</h2>
        </findhot>
        <findhot :findhotdata="findhot">
            <h2>精品头条</h2>
        </findhot>
    </main>
</template>
<script>
import slideup from "./content/slideup";
import findhot from "./content/findhot";
import axios from "axios";
export default {
    name:"",
    props:["navcont"],
    data(){
        return{
           slideup:[],
           findhot:[]
        }
    },
    components:{
        slideup,
        findhot
    },
    mounted(){
        axios.get('/api/data').then(data=>{
            this.slideup = data.data.data.slideup;
            this.findhot = data.data.data.findHot;
        })
    }
}
</script>
<style>
    .main{
        flex:1;
        width: 100%;
        overflow: hidden;
    }
    .main nav{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .main nav a{
        width: 20%;
        padding: 5px;
        text-align: center;
    }
    .main nav a img{
        width: 100%;
    }
</style>


