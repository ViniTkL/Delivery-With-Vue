import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categorie', () => {
  //Estado da minha APP
    const categories = ref([])

  // Ações que o user poder fazer
  const fecthCategories = async () => {
    const request = await fetch("https://664c0db135bbda10987ecef9.mockapi.io/api/v1/Fruits");
    const response = await request.json();
    categories.value = response;
    console.log(categories.value)
  }

  return { categories, fecthCategories}
})
