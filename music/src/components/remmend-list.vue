<template>
    <dl class="list" @click="goPage(data.id)">
        <dt>
            <img v-lazy="data.images">
        </dt>
        <dd>
            <p>{{data.title}}</p>
            <slot></slot>
        </dd>
    </dl>
</template>
<script>
export default {
    name:"remmend-list",
    props:{
        data:Object
    },
    methods:{
        goPage(id){
            this.$router.push({
                name:"remmendDetail",
                params:{
                    remmendid:id
                }
            })
        }
    }
}
</script>
<style>
.list{
    width: 100%;
    display: flex;
    padding: 10px 20px;

}
.list dt{
    width: 100px;
    height: 100px;
}
.list dt img{
    width: 100%;
    height: 100%;
}
.list dd{
    flex:1;
    overflow: hidden;
    padding-left:10px;
}
</style>


