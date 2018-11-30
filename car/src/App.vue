<template>
  <div id="app">
      <my-header></my-header>
      <main class="main">
        <my-ul 
        v-for="(val,index) in car"
        :key="index"
        :value="val"></my-ul>
      </main>
      <my-footer 
      :checked="allcheck"
      :sum="sum"></my-footer>
  </div>
</template>

<script>
import myHeader from "./components/myheader.vue";
import myFooter from "./components/myfooter.vue";
import myUl from "./components/myul.vue";
export default {
  name:"app",
  data(){
    return{
      allcheck:false,
      sum:0,
      car:[{
        allcheck:false,
        content:[{
          title:"卫龙辣条",
          price:3.5,
          weight:"100g",
          size:1,
          img:"shop.png",
          check:false,
          sumprice:3.5
        },{
          title:"三只松鼠坚果",
          price:35,
          weight:"500g",
          size:1,
          img:"shop.png",
          check:false,
          sumprice:35
        }]
      },{
        allcheck:false,
        content:[{
          title:"卫龙辣条",
          price:3.5,
          weight:"100g",
          size:1,
          img:"shop.png",
          check:false,
          sumprice:3.5
        },{
          title:"三只松鼠坚果",
          price:35,
          weight:"500g",
          size:1,
          img:"shop.png",
          check:false,
          sumprice:35
        }]
      }]
    }
  },
  components:{
    myHeader,
    myFooter,
    myUl
  },
  mounted(){
    this.bus.$on('checkone',this.isallcheck);
    this.bus.$on('checkarea',this.isallcheck);
    this.bus.$on('allcheck',()=>{
      this.allcheck = !this.allcheck;
      this.car.map(item=>{
        item.allcheck = this.allcheck;
        item.content.map(val=>val.check = this.allcheck)
      });
      this.addSumprice();
    })
  },
  methods:{
    isallcheck(){
      this.allcheck = this.car.every(item=>{
        return item.content.every(val=>val.check)
      });
      this.addSumprice();
    },
    addSumprice(){
      let sum = 0;
      this.car.map(item=>{
         item.content.map(val=>{
           if(val.check){
             sum += val.sumprice
           }
         })
      });
      this.sum = sum;
    }
  }
}
</script>

<style>
@import url("./css/style.css");
</style>
