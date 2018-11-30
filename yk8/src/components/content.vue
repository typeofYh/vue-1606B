<template>
    <div>
        <h2>{{curtitle.name}}{{curtitle.count}}</h2>
        <div>
            <button @click="table(0)" :class="{active:defaulteIndex===0}">所有</button>
            <button @click="table(1)" :class="{active:defaulteIndex===1}">公开源码</button>
        </div>
        <div>
            <my-dl v-for="(val,index) in list" :key="index" :val="val"></my-dl>
        </div>
    </div>
</template>
<script>
import myDl from "./dl.vue";
import axios from "axios";
export default {
    name:"",
    props:['tag'],
    data(){
        return{
            list:[],
            openlist:[],
            defaulteIndex:0,
            title:[{
                name:"所有项目",
                tag:'all',
                count:0
            },{
                name:"我创建的",
                tag:'create',
                count:0
            },{
                name:"我参与的",
                tag:'share',
                count:0
            },{
                name:"已归档",
                tag:'end',
                count:0
            }],
            curtitle:{}
        }
    },
    components:{
        myDl
    },
    created(){
        axios.get('/api/filter?tag='+this.tag).then(res=>{
            this.list = res.data;
            this.openlist = res.data;
            //在哪个页面
            let obj = this.title.find(item=>item.tag===this.tag);
            obj.count = this.list.length;
            this.curtitle = obj;
        })
    },
    methods:{
        table(index){
            this.defaulteIndex = index;
            if(this.defaulteIndex){
                this.list = this.list.filter(item=>item.open)
            }else{
                this.list = this.openlist;
            }
        }
    }
}
</script>
<style>
.active{
background: red;
}
</style>
