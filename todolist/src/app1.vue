<template>
    <div id="app">
        <div class="table-box">
            <mytitles :titles="title" @changecont="changecont" :curind="ind"></mytitles>
            <mytablecont>
                {{cont[ind]}}
            </mytablecont>
        </div>
    </div>
</template>
<script>
import mytitles from "./components/mytitles.vue";
import mytablecont from "./components/mytablecont.vue";
export default {
    name:"",
    data(){
        return{
            title:['周一','周二','周三'],
            cont:['要周考','要日考','要月考'],
            ind:0
        }
    },
    components:{
        mytitles,
        mytablecont
    },
    methods:{
        changecont(i){
            this.ind = i;
        }
    }
}
</script>


