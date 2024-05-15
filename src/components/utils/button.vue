<script setup>
    const props = defineProps(["title"])
</script>

<template>
    <el-button>{{ title }}</el-button>
</template>

<style scoped>
.el-button{
    background-color: #0BCE83;
    width: 100%;
    color: white;
    height: 48px;
    font-size: 14px;
    font-weight: 400px;
    margin-top: 30px;
}
</style>