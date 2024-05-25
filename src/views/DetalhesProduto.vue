<script setup>
import { useProductsStore } from '@/stores/products'
import {CollectionTag, ShoppingCart} from "@element-plus/icons-vue"

const store = useProductsStore();
</script>

<template>
    <main>
        <el-carousel trigger="click" height="150px">
            <el-carousel-item >
                <img :src="store.selectedProduct.image" alt="foto do produto">
            </el-carousel-item>

            <el-carousel-item >
                <img :src="store.selectedProduct.image" alt="foto do produto">
            </el-carousel-item>

            <el-carousel-item >
                <img :src="store.selectedProduct.image" alt="foto do produto">
            </el-carousel-item>
        </el-carousel>

        <div class="product-container">
            <h1>{{ store.selectedProduct.name }}</h1>
            <span>{{ store.selectedProduct.price }}</span>
            <h2>{{ store.selectedProduct.location }}</h2>
            <p>{{ store.selectedProduct.description }}</p>
        </div>

        <div class="actions">
        <button class="like"><el-icon><CollectionTag /></el-icon></button>
        <button class="shop"><el-icon><ShoppingCart /> ADD TO CART</el-icon></button>
    </div>
    </main>
</template>


<style scoped>
.product-container{
    padding: 14px;
}

.actions{
    display: flex;
    margin: 16px 0;
    gap: 12px;
}

.actions button {
    flex: 1;
    height: 28px;
    border-radius: 4px;
    border: 1px solid #444444;
}

.like{
    flex: 1;
    background-color: white;
}

.shop{
    flex: 3;
    background-color: aquamarine;
}
</style>