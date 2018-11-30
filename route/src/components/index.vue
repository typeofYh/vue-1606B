<template>
    <div class="wrap">
        <div>
            <ul>
            <li v-for="val in list"><router-link :to="'/index/'+val.id">{{val.text}}</router-link>
            </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'index',
    data(){
        return{
            list:[{
                text:"今日头条1",
                id:1
            },{
                text:"今日头条2",
                id:2
            },{
                text:"今日头条3",
                id:3
            },{
                text:"今日头条4",
                id:4
            }]
        }
    }
}
</script>

<style>
.wrap{
    
}
</style>

