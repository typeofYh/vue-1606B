<template>
    <header>
        <section>
            <label for="title">todoList</label>
            <input type="text" id="title" name="title" placeholder="添加todolist" autocomplete="off" @keyup.13="add()" v-model="text">
        </section>
    </header>
</template>
<script>
export default {
    name:"",
    data(){
        return{
            text:""
        }
    },
    methods:{
        //点击回车
        add(){
            //this.text 用户要添加的内容
            if(this.text===''){
                return;
            }
            this.bus.$emit('addtext',this.text);
            this.text = '';
        }
    }
}
</script>

