<template>
    <div class="findhot">
        <slot></slot>
        <ul>
            <li v-for="val in findhotdata">
                {{val.title}}
                {{val.info}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"",
    props:{
        findhotdata:Array
    }
}
</script>

