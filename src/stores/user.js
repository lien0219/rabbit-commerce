import { loginAPI } from "@/api/user";
import { defineStore } from "pinia";
import { ref } from "vue";
// import { useCartStore } from "./cartStore"
// import { mergeCartAPI } from "@/api/cart"

export const useUserStore = defineStore(
  "user",
  () => {
    // 定义管理用户数据的state
    const userInfo = ref({});
    // const cartStore = useCartStore()

    // 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      // 合并购物车操作
      //   await mergeCartAPI(
      //     cartStore.cartList.map((item) => {
      //       return {
      //         skuId: item.skuId,
      //         selected: item.selected,
      //         count: item.count,
      //       }
      //     })
      //   )
      //   cartStore.updateNewCartList()
    };

    //清除用户信息;
    const clearUserInfo = () => {
      userInfo.value = {};
      // 执行清除购物车的action
      // cartStore.clearCart()
    };

    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    // token持久化插件配置项
    persist: true,
  }
);
