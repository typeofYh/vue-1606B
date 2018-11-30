<template>
    <div id="app">
        <home-title></home-title>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
import homeTitle from "component/hometitle.vue";
export default {
    name:"App",
    data(){
        return{

        }
    },
    components:{
        homeTitle
    }
}
</script>
<style>
@import url('./css/style.css');
</style>


