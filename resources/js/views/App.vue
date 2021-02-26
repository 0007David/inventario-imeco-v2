<template>
    <div class="wrapper">

        <navbar/>

        <asidebar/>

        <router-view></router-view>

        <footer-template/>
    </div>
</template>
<script>

    export default {
        created () {
        },
        data() {
            return {
                sidebar: true,
                modules: [],
            }
        },
        methods: {

        },
        components: {
        }
    }
</script>
<script scoped>
</script>>