<template>
    <div class="table-title">
        <button v-for="(val,i) in titles" @click="$emit('changecont',i)" :class="{active:curind==i}">{{val}}</button>
    </div>
</template>
<script>
export default {
    name:"",
    props:{
        titles:Array,
        curind:Number
    }
}
</script>
<style>
.active{
    background: red;
}
</style>

