<template>
    <div class="footer">
		<span class="check" id="allcheck" :class="{checked:checked}" @click="allcheck"></span>
		全选
		<div class="fr combtn" id="btn">
			结算
		</div>
		<div class="total fr">
			<p>合计：<span id="totalPrice">￥{{sum}}</span></p>
			<p>不含运费</p>
		</div>
	</div>
</template>
<script>
export default {
    name:"myfooter",
	props:["checked","sum"],
	methods:{
		allcheck(){
			this.bus.$emit('allcheck');
		}
	}
}
</script>

