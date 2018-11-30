<template>
    <header class="myheader">
        <span>Chicken Music</span>
        <router-link to="/like"  tag="button">收藏</router-link>
    </header>
</template>
<script>
export default {
    name:"myheader"
}
</script>

<style>
.myheader{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: #333;
    color:yellow;
    text-align: center;
}
</style>

