<script setup>
    const props = defineProps(["category"])
</script>

<template>
<div class="categorie-item">
    <img :src="category.image" alt="Foto da categoria">
    <h3>{{ category.name }}</h3>
    <span>{{ category.quantity }}</span>
</div>
</template>

<style scoped>
    .categorie-item{
        width: 50%;
        padding: 4px;
        border: solid 1px #A9A9A9;
    }

    img{
        width: 100%;
    }
</style>