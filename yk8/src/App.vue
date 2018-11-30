<template>
  <div id="app">
    <div class="left">
      <h2>项目 <router-link tag="button" to="/addObject">+</router-link></h2>
      <ul>
        <router-link 
        tag="li"
        v-for="(val,index) in title"
        :to="{path:val.path}"
        :key="index">{{val.name}}( {{val.count}} )</router-link>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'App',
  data(){
    return{
      title:[{
        name:"所有项目",
        path:'/all',
        tag:'all',
        count:0
      },{
        name:"我创建的",
        path:'/create',
        tag:'create',
        count:0
      },{
        name:"我参与的",
        path:'/share',
        tag:'share',
        count:0
      },{
        name:"已归档",
        path:'/end',
        tag:'end',
        count:0
      }],
      list:[]
    }
  },
  watch:{
    '$route':'change'
  },
  mounted(){
    this.change();
  },
  methods:{
    change(){
       axios.get('/api/data').then(res=>{
          this.list = res.data;
          this.title.forEach(item=>{
            if(item.tag === 'all'){
              item.count = this.list.length;
            }else{
              item.count = this.list.filter(val=>val[item.tag]).length
            }
          });
      })
    }
  }
}
</script>

<style>
*{
    padding:0;
    margin: 0;
    list-style: none;
}
body,html{
  width: 100%;
  min-height: 100%;
  background: #eee;
}
#app{
  width: 1200px;
  overflow: hidden;
  height: 600px;
  margin: 0 auto;
}
.left{
  width: 200px;
  height: 100%;
  float: left;
  background: #fff;
}
.right{
  width: 980px;
  height: 100%;
  float: left;
  margin-left:20px;
  background: #fff;
  overflow: auto;
}
.router-link-active{
  background: #ccc;
}
</style>
