<script setup>
import formSearch from '@/components/utils/formSearch.vue';
import CategorieItem from '@/components/utils/CategorieItem.vue';
import { useCategoriesStore } from '@/stores/categories';

const store = useCategoriesStore();
</script>

<template>
<main>
    <h1>categories</h1>
    <formSearch></formSearch>

    <div class="categorie-list">
        <CategorieItem v-for="category in store.categories" :category="category"></CategorieItem>
    </div>
</main>

</template>

<style scoped>
    .categorie-list {
        display: flex;
        flex-flow: row wrap;
    }
</style>