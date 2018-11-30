<template>
    <dl>
        <dt>{{title}}</dt>
        <dd>
            <span 
            :class="{active:setDefaultclass}"
            @click="infinite">不限</span>
            <span 
            v-for="(val,index) in value"
            @click="selected(index)"
            :class="{active:setspanClass(index)}">{{val}}</span>
        </dd>
    </dl>
</template>
<script>
export default {
    name:"mydl",
    props:['title','value','type','curindex'],
    data(){
        return{
            index:this.curindex
        }
    },
    watch:{
        curindex(newval){
            this.index = newval;
        }
    },
    computed:{
        //设置不限的显示状态
        setDefaultclass(){
           if(this.type==='more'){
               return this.index.length === 0;
           } else{
               return this.index === null;
           }
        }
    },
    methods:{
        selected(curind){
            if(this.type==='more'){  //多选
                var res = this.index.findIndex(item=>item.index===curind);
                if(res===-1){
                    this.index.push({
                        index:curind,
                        title:this.value[curind]
                    });
                }else{
                    this.index.splice(res,1);
                }
            }else{  //单选
                this.index = curind === this.index ? null : curind;
            }
            this.$emit('selected',this.index);
        },
        setspanClass(i){
            if(this.type==='more'){
               return this.index.some(item=>item.index===i);
            }else{
               return this.index === i;
            }
        },
        infinite(){
            if(this.type==='more'){
               this.index = [];
            }else{
               this.index = null;
            }
            this.$emit('selected',this.index);
        }
    }
}
</script>
<style scoped>
span{
    display: inline-block;
    padding: 5px 20px;
    cursor: pointer;
}
span.active{
    background: skyblue;
}
</style>

