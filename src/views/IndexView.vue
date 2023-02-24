<template>
    <el-header height="60px">
        <TopHorizontalMenu />
    </el-header>
    <el-container style="height:calc(100vh - 60px)">
        <LeftVerticalMenu v-model:key="key" v-model:value="value"/>
        <el-container>
            <el-main>
                <DynamicTabs />
            </el-main>
            <!-- <el-footer>页脚</el-footer> -->
        </el-container>
    </el-container>
</template>

<script setup>
import { ref } from 'vue'
import TopHorizontalMenu from '../components/navigation/menu/TopHorizontalMenu.vue'
import LeftVerticalMenu from '../components/navigation/menu/LeftVerticalMenu.vue'
import DynamicTabs from '../components/navigation/tabs/DynamicTabs.vue'

const key = ref("1111");
const value = ref("2222");
const emit = defineEmits(['key', 'value'])
	const handlerClick = () => {
	    emit('update:key', '新的key')
	    emit('update:value', '新的value')
	}
</script>

<script>

</script>

<style>
main {
  width: 100%;
  height: 100%;
}
.el-header  {
  background-color: rgb(50, 50, 51) !important;
  color: rgb(186, 187, 187) !important;
}
.el-menu--horizontal {
  background-color: rgb(50, 50, 51) !important;
  color: rgb(186, 187, 187) !important;
}
.el-header > ul {
  height: 61px;
  color: aliceblue !important;
}
</style>