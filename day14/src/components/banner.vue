<template>
    <ul>
        <li v-for="val in imgs">{{val}}</li>
    </ul>
</template>
<script>
export default {
    name:'banner',
    data(){
        return{
            imgs:['1234','456','789']
        }
    }
}
</script>
