<template>
    <header class="header">
        <ul>
            <li v-for="value in title">
                <span @click="fun(value.name)">{{value.text}}</span>
            </li>
        </ul>
    </header>
</template>
<script>
export default {
    name:"homeTitle",
    data(){
        return{
            title:[{
                name:'index',
                text:'首页'
            },{
                name:'news',
                text:'新闻'
            },{
                name:'vip',
                text:'会员'
            },{
                name:'list',
                text:'列表'
            }]
        }
    },
    methods:{
        fun(name){
            console.log(this.$route);  //当前路由对象
            console.log(this.$router); //全局router对象
            //切换路径
            this.$router.push({
                name:name
            });
        }
    }
}
</script>
<style>
.header{
    width: 100%;
    height: 45px;
    line-height: 45px;
}
.header ul{
    display: flex;
}
.header li{
    flex:1;
    text-align: center;
}
.header a{
    text-decoration: none;
}
</style>


