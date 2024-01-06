import { defineStore } from "pinia";
import { getCategoryAPI } from "@/api/layout.js";
import { ref } from "vue";

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref();

  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  };

  return {
    categoryList,
    getCategory,
  };
});
