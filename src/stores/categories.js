import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categorie', () => {
  //Estado da minha APP
    const categories = ref([])

  // Ações que o user poder fazer
  const fecthCategories = async () => {
    const request = await fetch("urlMockAqui");
    const response = await request.json();
    categories.value = response;
  }

  return { categories, fecthCategories}
})
