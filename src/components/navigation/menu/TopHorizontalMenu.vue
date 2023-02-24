<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
        height="60px"
        text-color="#cccccc"
        active-text-color="#e2d4d4"
    >
        <el-menu-item index="0">UAIOSC</el-menu-item>

        <div class="flex-grow" />

        <!-- <el-menu-item index="1">Nothing here</el-menu-item> -->

        <el-sub-menu index="2">
            <template #title>xx用户</template>
            <el-menu-item index="2-1">个人信息</el-menu-item>
            <el-menu-item index="2-2">退出登录</el-menu-item>
            <!-- <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu> -->
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'

    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
</script>

<style>
.flex-grow {
    flex-grow: 1;
}
</style>