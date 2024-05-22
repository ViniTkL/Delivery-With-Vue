import { ref } from "vue";
import { defineStore } from "pinia";

export default useProductsStore = defineStore("product", () => {
    const products = ref([]);

    const fetchProducts = async () => {
        const req = await fetch("url");
        const response = await req.json();
        products.value = response;
    }

    return { products, fetchProducts }
})