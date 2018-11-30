<template>
    <div class="likebox">
        <span @click="$router.back()"><</span>
        <ul>
            <li 
            v-for="val in list" @click="localtion(val.id)">
            {{val.title}}</li>
        </ul>
    </div>
</template>
<script>
let storage = window.localStorage;
export default {
    name:"mylike",
    data(){
        return{
            list:JSON.parse(storage.getItem('like')) || []
        }
    },
    methods:{
        localtion(id){
            this.$router.push({
                name:"remmendDetail",
                params:{
                    remmendid:id
                }
            })
        }
    }
}
</script>

