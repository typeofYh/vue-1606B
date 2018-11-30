<template>
    <li>
        <span class="check" single="25" num="1" :class="{checked:value.check}" @click="checkedone"></span>
        <img :src="'../../static/'+value.img" class="pic">
        <div class="disc">
            <p class="name">{{value.title}}</p>
            <p class="weight">{{value.weight}}</p>
            <p class="price">￥{{value.price.toFixed(2)}}</p>
        </div>
        <div class="computed">
            <div class="dis fl" @click="reduce">-</div>
            <div class="num fl">{{value.size}}</div>
            <div class="add fr" @click="add">+</div>
        </div>
    </li>
</template>
<script>
export default {
    name:"myli",
    props:['value'],
    methods:{
        reduce(){
            this.value.size--;
            this.value.size = this.value.size <= 1 ? 1 : this.value.size;
            this.sumprice();
        },
        add(){
            this.value.size++;
            this.sumprice();
        },
        sumprice(){
            this.value.sumprice = this.value.size * this.value.price;
            this.bus.$emit('checkone');
        },
        checkedone(){
            this.value.check = !this.value.check;
            this.bus.$emit('checkone');
        }
    }
}
</script>

