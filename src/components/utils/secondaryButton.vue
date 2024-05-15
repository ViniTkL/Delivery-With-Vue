<script setup>
    const props = defineProps(["title"])
</script>

<template>
    <el-button>{{ title }}</el-button>
</template>

<style scoped>
.el-button{
    background-color: white;
    width: 100%;
    color: #9586A8;
    height: 48px;
    font-size: 14px;
    font-weight: 400px;
    margin-top: 30px;
    border: 1px solid #9586A8;
}
</style>