import { loginAPI } from "@/api/user";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useCartStore } from "./cartStore";
import { mergeCartAPI } from "@/api/cart";

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref({});
    const cartStore = useCartStore();

    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      // 合并购物车
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
      cartStore.updateNewCartList();
    };

    //清除用户信息;
    const clearUserInfo = () => {
      userInfo.value = {};
      // 清除购物车
      cartStore.clearCart();
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
