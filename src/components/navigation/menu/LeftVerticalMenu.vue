<template>
    <el-aside :width="sideWidth+'px'" style="background-color: rgb(139 178 224); height: 100%;">
        <el-menu
            class="el-menu-vertical"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
            style="height: 100%;"
            background-color="rgb(43, 45, 46)"
            text-color="#cccccc"
            active-text-color="#e2d4d4"
            :collapse-transition="false"
        >
            <el-menu-item index="-1">
                <div style="flex: 1; font-size: 20px; color: aliceblue;" >
                    <el-icon @click="changeCollapse" v-show="!isCollapse"><Fold /></el-icon>
                    <el-icon @click="changeCollapse" v-show="isCollapse"><Expand /></el-icon>
                </div>
            </el-menu-item>
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><Document /></el-icon>
                    <span>游戏注册 game-register</span>
                </template>
                <el-menu-item-group>
                    <!-- <template #title><span>游戏注册 game-register</span></template> -->
                    <el-menu-item index="1-1">账户管理</el-menu-item>
                    <el-menu-item index="1-2">游戏管理</el-menu-item>
                </el-menu-item-group>
                <!-- <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu> -->
            </el-sub-menu>

            <el-sub-menu index="2">
                <template #title>
                    <el-icon><IconMenu /></el-icon>
                    <span>瓦罗兰特 Valorant</span>
                </template>
                <el-menu-item-group>
                    <!-- <template #title><span>游戏注册 game-register</span></template> -->
                    <el-menu-item index="2-1" disabled>账户管理</el-menu-item>
                    <el-menu-item index="2-2" >每日商店</el-menu-item>
                    <el-menu-item index="2-3" >夜市</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            
            <el-menu-item index="3" disabled>
                <el-icon><Setting /></el-icon>
                <template #title>About</template>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
    } from '@element-plus/icons-vue'

    const handleOpen = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }
</script>

<script lang="ts">
export default {
    isCollapse: false,
    data() {
        return {
            isCollapse: false,
            sideWidth: 250,
        }
    },
    methods:{
        //点击收缩按钮触发
        changeCollapse() {
            this.isCollapse = !this.isCollapse
            //折叠时
            if(this.isCollapse) {
                this.sideWidth = 64
            //展开时
            } else {
                this.sideWidth = 250
            }
        },
    }
}
</script>

<style>
.el-sub-menu__title {
    background-color: transparent !important;
}
</style>