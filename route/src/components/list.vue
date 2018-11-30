<template>
    <div>
        <span class="back" @click="back"><</span>
        <div class="content">
            {{list}}
        </div>
    </div>
</template>
<script>
export default {
    name:"list",
    props:['list'],
    data(){
        return{

        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

