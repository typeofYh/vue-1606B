<template>
  <div class="listcont">
      <router-link to="/bookshelf">书架</router-link>
      <ul>
        <li 
        v-for="(val,index) in list"
        :key="index">
          <dl>
            <dt><img :src="val.avatar"></dt>
            <dd>
              <h2>{{val.title}}</h2>
              <p>{{val.author}}|{{val.tags.join(' | ')}}</p>
              <p>{{val.summary}}</p>
              <router-link 
              :to="{path:'/detail',query:{id:val.id}}"
              tag="button">书籍详情</router-link>
              <my-button 
              :id="val.id"
              :open="local.find(item=>item.id==val.id)"
              :title="val.title"
              :tag="val.tags[0]">加入书架</my-button>
            </dd>
          </dl>
        </li>
      </ul>
  </div>
</template>

<script>
import myButton from "./myButton";
import axios from "axios";
export default {
  name: 'mylist',
  props:['local'],
  data () {
    return {
      list: []
    }
  },
  mounted(){
    axios.get('/api/list').then(res=>{
      this.list = res.data.data;
    })
  },
  components:{
    myButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
