<template>
  <div id="app">
    <my-header></my-header>
    <my-nav></my-nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import myHeader from "@/components/myheader.vue";
import myNav from "@/components/mynav.vue";
export default {
    name:"App",
    data(){
      return{

      }
    },
    components:{
      myHeader,
      myNav
    }
}
</script>

<style>
@import url("./css/common.css");
#app{
  display: flex;
  flex-direction: column;
}
#app main{
  flex:1;
  width: 100%;
  overflow: auto;
}
.likebox{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: #000;
}
</style>
