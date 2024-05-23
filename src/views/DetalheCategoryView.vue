<script setup>
    import { useCategoriesStore } from '@/stores/categories';
    import { useProductsStore} from '@/stores/products'
    import ProductItem from '@/components/utils/ProductItem.vue';

    const store = useCategoriesStore();

    const storeProducts = useProductsStore();
</script>

<template>
<div class="categorie-item">
    <h3>{{ store.selectedCategory }}</h3>
</div>
    <ProductItem></ProductItem>
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