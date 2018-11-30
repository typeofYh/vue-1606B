<template>
    <div class="detailcont">
        <div class="loading" v-if="page===null">loading...</div> 
        <dl v-if="page">
            <dt><img :src="page.avatar" alt=""></dt>
            <dd>
                <h1>{{page.title}}</h1>
                <my-button 
                :id="page.id"
                :open="local.find(item=>item.id==page.id)"
                :title="page.title"
                :tag="page.tags[0]"></my-button>
            </dd>
        </dl>
    </div>
</template>
<script>
import axios from "axios";
import myButton from "./myButton";
export default {
    name:"detail",
    props:['local'],
    data(){
        return{
            page:null
        }
    },
    watch:{
        '$route':'loading'
    },
    created(){
        this.loading();
    },
    components:{
        myButton
    },
    methods:{
        loading(){
            var id = this.$route.query.id;
            this.page = null;
            axios.post('/api/detail',{
                id:id
            }).then(res=>{
                this.page = res.data;
            })
        }   
    }
}
</script>

