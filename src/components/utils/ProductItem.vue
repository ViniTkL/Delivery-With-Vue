<script setup>
import {CollectionTag, ShoppingCart} from "@element-plus/icons-vue"
import {useProductsStore} from '@/stores/products'
import { useRouter } from "vue-router";
const props = defineProps(["produto"])

const router = useRouter()
const store = useProductsStore();

const onProductClick = () => {
    store.selectProduct(props.produto)
    router.push('/detalhe-produto');
}

</script>

<template>
<div @click="onProductClick()" class="product-container">
    <img :src="produto.image" alt="foto do produto">
    <div class="info-container">
        <h2>{{ produto.name }}</h2>
        <span>{{ produto.price }} R$ / {{ produto.unit.symbol }}</span>
    </div>
    <div class="actions">
        <button class="like"><el-icon><CollectionTag /></el-icon></button>
        <button class="shop"><el-icon><ShoppingCart /></el-icon></button>
    </div>
</div>

</template>

<style scoped>
.product-container {
    display: flex;
}
img {
    flex: 1;
    margin: 8px;
    border-radius: 16px;
    border: solid 1px #444;
    width: 128px;
}
.info-container {
    flex: 1;
}
h2, span {
    font-weight: 600;
    font-size: 16px;
    margin: 4px 0 4px 8px;
}
.actions {
    display: flex;
    margin: 4px 8px;
    gap: 12px;
}
.actions button {
    flex: 1;
    height: 28px;
    border-radius: 4px;
    border: solid 1px #444;
}
.like {
    background-color: white;
}
.shop {
    background-color: aquamarine;
}
</style>