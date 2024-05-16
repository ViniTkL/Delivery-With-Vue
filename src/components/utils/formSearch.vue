<script setup>
import { Search } from '@element-plus/icons-vue';
import {ref} from 'vue';

const input = ref('')
</script>

<template>
<div>
    <el-input v-model="input" placeholder="Please Input" :suffix-icon="Search"></el-input>
</div>    
</template>