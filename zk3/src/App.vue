<template>
  <div id="app">
    <div class="title">
      已选择：
      <div class="selectedbox">
        <p v-if="singleindex!==null">{{dldata[0].data[singleindex]}}<b @click="claersingle">x</b></p>
        <p v-if="moreindex.length!==0">{{moreindex.map(item=>item.title).join(',')}}<b @click="claermore">x</b></p>
      </div>
    </div>
    <div class="content">
      <my-dl 
        v-for="(val,index) in dldata"
        v-on:selected="selected"
        :key="index"
        :title="val.title"
        :value="val.data"
        :type="val.type"
        :curindex="val.type==='single'?singleindex:moreindex"  
      ></my-dl>
    </div>
  </div>
</template>

<script>
import myDl from './components/mydl'

export default {
  name: 'App',
  data(){
    return{
      dldata:[{
        title:"高校层次",
        type:'single',
        data:["一流大学","一流学科","985工程","211工程","普通本科","民办本科","高端专科"]
      },{
        title:"高校地区",
        type:'more',
        data:["安徽","北京","上海","天津","河北","河南","东北"]
      }],
      singleindex:null,
      moreindex:[]
    }
  }, 
  components: {
    myDl
  },
  methods:{
    selected(res){
      if(Array.isArray(res)){
        this.moreindex = res;
      }else{
        this.singleindex = res;
      }
    },
    claersingle(){
      this.singleindex = null;
    },
    claermore(){
      this.moreindex = [];
    }
  }
}
</script>

<style>

</style>
