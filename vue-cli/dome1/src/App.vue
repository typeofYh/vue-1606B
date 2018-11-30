<template>
  <div id="app">
    <headers>
      <span>广场</span>
    </headers>
    <contents :navcont="nav"></contents>
  </div>
</template>

<script>
import headers from "./components/headers";
import contents from "./components/content";
let navArr = [{
        title:"新闻",
        url:'icon.jpg'
      },{
        title:"新闻",
        url:'icon.jpg'
      },{
        title:"新闻",
        url:'icon.jpg'
      },{
        title:"新闻",
        url:'icon.jpg'
      },{
        title:"新闻",
        url:'icon.jpg'
      },{
        title:"新闻",
        url:'icon.jpg'
      },{
        title:"新闻",
        url:'icon.jpg'
      },{
        title:"新闻",
        url:'icon.jpg'
      },{
        title:"新闻",
        url:'icon.jpg'
      },{
        title:"新闻",
        url:'icon.jpg'
      }];
export default {
  name: 'App',
  data(){
    return{
      nav:navArr
    }
  },
  components: {
    headers,
    contents
  }
}
</script>

<style>
@import url(../static/css/common.css);
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
