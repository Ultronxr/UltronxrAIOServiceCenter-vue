<script setup>
</script>

<template>
    <div class="common-layout">
        登录界面
        <RouterLink to="/index">登录</RouterLink>
        <!-- <button @click="gotoNewPage(1)">登录</button> -->
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        gotoNewPage(obj) {
            let pageRoute = "/";
            switch (obj) {
                case 1: {
                    pageRoute = "/index";
                    break;
                }
            }
            this.$router.push(pageRoute);
        }
    }
}
</script>

<style>
</style>