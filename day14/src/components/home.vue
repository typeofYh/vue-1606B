<template>
    <div class="home-cont">
        <banner></banner>
        <router-view></router-view>
    </div>
</template>
<script>
import banner from "./banner.vue";
export default {
    name:"home",
    components:{
        banner
    }
}
</script>

