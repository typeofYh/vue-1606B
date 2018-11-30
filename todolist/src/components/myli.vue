<template>
    <li><input type="checkbox" @click="checked" :checked="flag"><p id="p-0"><slot></slot></p><a href="javascript:;" @click="remove">-</a></li>
</template>
<script>
export default {
    name:"",
    props:['name','index','flag'],
    methods:{
        checked(){
            this.bus.$emit('checked',this.name,this.index);
        },
        remove(){
            this.bus.$emit('remove',this.name,this.index);
        }
    }
}
</script>
