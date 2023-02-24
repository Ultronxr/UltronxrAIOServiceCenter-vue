<template>
    <!-- <div style="margin-bottom: 20px">
        <el-button size="small" @click="addTab(editableTabsValue, "")">
            add tab
        </el-button>
    </div> -->
    <el-tabs
        v-model="editableTabsValue"
        type="card"
        class="tabs"
        @tab-remove="removeTab"
    >
        <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        :closable="item.closable"
        >
            {{ item.content }}
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let tabIndex = 1
const editableTabsValue = ref('main')
const editableTabs = ref([
    {
        name: 'main',
        title: '主页',
        content: '主页内容',
        closable: false,
    }
])

const addTab = (targetName: string, targetTitle: string) => {
    // const newTabName = `${++tabIndex}`
    const newTabName = targetName,
        newTabTitle = targetTitle;
    editableTabs.value.push({
        name: newTabName,
        title: newTabTitle,
        content: 'New Tab content',
        closable: true
    })
    editableTabsValue.value = newTabName
}
const removeTab = (targetName: string) => {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
        tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
                activeName = nextTab.name
            }
        }
        })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>

<style>
.tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>