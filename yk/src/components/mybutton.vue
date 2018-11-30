<template>
    <button @click="addbookshelf" v-text="isopen?'移除书架':'加入书架'"></button>
</template>
<script>
export default {
    name:"mybutton",
    data(){
        return{
            text:'加入书架',
            isopen:this.open
        }
    },
    props:['id','open','title','tag'],
    methods:{
        addbookshelf(){
            this.isopen = !this.isopen;
            this.bus.$emit('buttonev',{
                open:this.isopen,
                id:this.id,
                title:this.title,
                tag:this.tag
            });
        }
    }
}
</script>

