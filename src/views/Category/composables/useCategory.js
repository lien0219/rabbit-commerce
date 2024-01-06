// 封装分类数据
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { getTopCategoryAPI } from "@/api/category";

export function useCategory() {
  // 获取分类数据
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => getCategory(route.params.id));

  //路由参数变化把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    console.log("路由变化", to);
    getCategory(to.params.id);
  });

  return {
    categoryData,
  };
}
