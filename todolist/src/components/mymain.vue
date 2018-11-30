<template>
    <div>
        <section>
            <h2>正在进行 <span id="todocount">{{pagedata.todolist.length}}</span></h2>
            <ol id="todolist" class="demo-box">
                <myli v-for="(val,key) in pagedata.todolist" name="todolist" :index="key" :flag="false">
                    {{val.title}}
                </myli>
            </ol>
            <h2>已经完成 <span id="donecount">{{pagedata.finish.length}}</span></h2>
            <ul id="donelist">
                <myli v-for="(val,key) in pagedata.finish" name="finish" :index="key" :flag="true">
                    {{val.title}}
                </myli>
            </ul>
        </section>
        <footer>
            Copyright © 2014 todolist.cn <a href="javascript:;" @click="bus.$emit('clear')">clear</a>
        </footer>
    </div>
</template>
<script>
import myli from "./myli.vue";
export default {
    name:"",
    props:['pagedata'],
    components:{
        myli
    }
}
</script>
