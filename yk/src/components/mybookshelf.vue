<template>
    <div class="bookshelfcont">
        <ul>
            <li 
            v-for="(val,index) in list"
            :key="index">
            <input type="checkbox" :checked="onecheck[index]" @click="onechecked(index)">
            [{{val.tag}}]{{val.title}}</li>
        </ul>
        <div>
            <input type="checkbox" @click="all" :checked="allcheck">全选
            <button @click="remve">删除</button>
        </div>
    </div>
</template>
<script>
let storage = window.localStorage;
export default {
    name:'mybookshelf',
    props:['local'],
    data(){
        return{
            onecheck:[],
            allcheck:false,
            list:this.local
        }
    },
    created(){
        this.onecheck = this.list.map(item=>false);
    },
    methods:{
        all(){
            this.allcheck = !this.allcheck;
            this.onecheck = this.onecheck.map(item=>this.allcheck);
        },
        onechecked(i){
            this.onecheck[i] = !this.onecheck[i];
            this.allcheck = this.onecheck.every(item=>item);
        },
        remve(){
            this.bus.$emit('remove',this.onecheck);
            this.onecheck = this.onecheck.map(item=>false);
        }
    }
}
</script>

