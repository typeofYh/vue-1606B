<template>
    <header class="header" @click="func">{{title}}</header>
</template>
<script>
export default {
    name:"headers", //组件名
    data(){
         return {
            title: "1606B"
        }
    },
    methods: {
        func() {
            console.log(this.title);
        }
    }
}
</script>
<style scoped>
    .header{
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-bottom: 1px solid #000;
    }
</style>


