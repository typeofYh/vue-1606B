<template>
  <div id="app">
      <router-view :local="local"></router-view>
  </div>
</template>

<script>
let storage = window.localStorage;
export default {
  name: 'App',
  data(){
    return{
      local:JSON.parse(storage.getItem('bookshelf')) || []
    }
  },
  mounted(){
    this.bus.$on('buttonev',res=>{
       if(res.open){
         this.local.push(res);
       }else{
         this.local = this.local.filter(item=>item.id != res.id)
       }
       storage.setItem('bookshelf',JSON.stringify(this.local));
    });
    this.bus.$on('remove',res=>{
       res.forEach((item,index)=>{
          if(item){
            this.local.splice(index,1);
          }
       })
       storage.setItem('bookshelf',JSON.stringify(this.local));
    })
  }
}
</script>

<style>

</style>
