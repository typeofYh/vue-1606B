<template>
    <nav class="mynav">
        <ul>
            <router-link tag="li" v-for="val in navlist" :to="val.url">
                <span>{{val.title}}</span>
            </router-link>
        </ul>
    </nav>
</template>
<script>
export default {
    name:"mynav",
    data(){
        return{
            navlist:[{
                title:"推荐",
                url:"/remmend"
            },{
                title:"歌手",
                url:"/person"
            },{
                title:"排行",
                url:"/rank"
            },{
                title:"搜索",
                url:"/search"
            }]
        }
    }
}
</script>
<style>
.mynav{
    width: 100%;
    height: 40px;
    line-height: 40px;
    
}
.mynav ul{
    display: flex;
}
.mynav li{
    flex:1;
    text-align: center;
    color:#eee;
}
.mynav li.router-link-active{
    color:yellow;
}
</style>


