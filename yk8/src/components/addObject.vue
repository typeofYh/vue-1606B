<template>
    <div>
        <h2>新建项目</h2>
        <form>
            <label>项目名称</label>
            <input type="text" v-model="mes.title">
            <label>作者</label>
            <input type="text" v-model="mes.auther">
            <input type="checkbox" :checked="mes.open" @click="mes.open = !mes.open"> 公开开源代码
            <button type="button" @click="addobject">新建项目</button>
            <button type="button" @click="$router.back()">取消</button>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:'addObject',
    data(){
        return{
            mes:{
                auther:"",
                title:"",
                img:"http://img12.3lian.com/gaoqing02/01/58/85.jpg",
                create:true,
                share:true,
                open:false,
                end:false
            }
        }
    },
    methods:{
        addobject(){
            if(this.mes.auther==='' || this.mes.title===''){
                alert('不能为空')
            }else{
               axios.post('/api/addobject',this.mes).then(res=>{
                   if(res.data.mes === 'success'){
                       this.$router.push('/');
                   }
               })
            }
        }
    }
}
</script>
