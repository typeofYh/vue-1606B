<template>
    <div id="wrap">
        <myheaders></myheaders>
        <mymain :pagedata="pagedata"></mymain>
    </div>
</template>
<script>
import myheaders from "./components/myheaders.vue";
import mymain from "./components/mymain.vue";
import "./css/style.css";
export default {
    name:"app",
    data(){
        return{
            pagedata:{
                todolist:[],
                finish:[]
            }
        }
    },
    components:{
        myheaders,
        mymain
    },
    mounted(){
        this.bus.$on('checked',(name,index)=>{
            let arr = this.pagedata[name][index]; //要操作的数组
            this.removearr(name,index);
            let n = name === 'finish' ? 'todolist' : 'finish'; //找另一个对象
            this.pagedata[n].push(arr); //给另一个对象添加数组
        });
        this.bus.$on('remove',(name,index)=>{
            this.removearr(name,index);
        });
        this.bus.$on('clear',()=>{
            this.pagedata.todolist = [];
            this.pagedata.finish = [];
        });
        this.bus.$on('addtext',(text)=>{
             this.pagedata.todolist.unshift({
                title:text
            });
        });
    },
    methods:{
        removearr(name,index){
            this.pagedata[name].splice(index,1);  //删除原对象里的数组
        }
    }
}
</script>
<style>
/* @import url("./css/style.css"); */
</style>



