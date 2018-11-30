<template>
    <div>
       欢迎: {{name}} 
    </div>
</template>
<script>
export default {
    name:'vip',
    computed:{
        name(){
            return this.$route.params.vipname
        }
    }
}
</script>
