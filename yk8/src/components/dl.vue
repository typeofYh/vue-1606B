<template>
    <dl>
        <dt><img :src="val.img"></dt>
        <dd>
            <h2>{{val.title}}</h2>
            <h3>{{val.auther}}</h3>
        </dd>
    </dl>
</template>
<script>
export default {
    name:'mydl',
    props:['val']
}
</script>
<style>
dl{
  width: 100px;
  display: inline-block;
}
h3,h2{
  font-size: 12px;
  font-weight: normal;
}

img{
  width: 100%;
}
</style>
