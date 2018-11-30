<template>
    <ul class="list">
			<li>
				<span class="check main" 
                :class="{checked:value.allcheck}"
                @click="allchecked"></span>
				momo
			</li>
            <my-li 
            v-for="(val,index) in value.content"
            :value="val"></my-li>
			<li class="baoyou">
				<span class="label">包邮</span>
				<span>商家包邮</span>
			</li>
		</ul>
</template>
<script>
import myLi from "./myli.vue";
export default {
    name:'myul',
    props:{
        value:{
            type:Object
        }
    },
    components:{
        myLi
    },
    mounted(){
        this.bus.$on('checkone',()=>{
           this.value.allcheck = this.value.content.every(item=>item.check);
        })
    },
    methods:{
        allchecked(){  //局部全选
            this.value.allcheck = !this.value.allcheck;
            this.value.content.map(item=>item.check = this.value.allcheck);
            this.bus.$emit('checkarea')
        }
    }
}
</script>

