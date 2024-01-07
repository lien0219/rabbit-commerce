import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import {
  insertCartAPI,
  findNewCartListAPI,
  delCartAPI,
  updCartAPI,
  updCartSelectedAPI,
} from "@/api/cart";

// 购物车
export const useCartStore = defineStore(
  "cart",
  () => {
    const cartList = ref([]);
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);

    //加入购物车 addCart
    const addCart = async (goods) => {
      //是否已登录
      if (isLogin.value) {
        const { skuId, count } = goods;
        console.log(1111);
        // 登陆
        await insertCartAPI({ skuId, count });
        updateNewCartList();
      } else {
        // 添加购物车
        console.log("添加购物车");
        // 已添加过 - count + 1
        // 没有添加过 - push
        const item = cartList.value.find((item) => goods.skuId === item.skuId);
        if (item) {
          item.count = item.count + goods.count;
        } else {
          cartList.value.push(goods);
        }
        console.log(cartList.value, "cartList.value(加入购物车)");
      }
    };

    // 删除购物车
    const delCart = async (skuId) => {
      if (isLogin.value) {
        await delCartAPI([skuId]);
        updateNewCartList();
      } else {
        const index = cartList.value.findIndex((item) => skuId === item.skuId);
        cartList.value.splice(index, 1);
      }
    };

    // 获取最新购物车列表
    const updateNewCartList = async () => {
      const res = await findNewCartListAPI();
      cartList.value = res.result;
    };

    // 总数量
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    );
    // 总价
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.price * c.count, 0)
    );
    // 已选择数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    );
    // 已选择商品价格合计
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.price * c.count, 0)
    );

    // 单选
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => skuId === item.skuId);
      item.selected = selected;
      if (isLogin) {
        updateCartList(skuId, selected, item.count);
      }
    };
    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected));

    // 全选
    const allCheck = async (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
      if (isLogin) {
        await updCartSelectedAPI({
          selected,
          ids: Array.from(cartList.value, ({ skuId }) => skuId),
        });
      }
    };

    // 清除购物车
    const clearCart = () => {
      cartList.value = [];
    };

    // 修改购物车
    const updateCartList = async (skuId, selected, currentValue) => {
      console.log("修改", skuId, selected, currentValue);
      await updCartAPI(skuId, {
        selected,
        count: currentValue,
      });
    };

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedCount,
      selectedPrice,
      updateNewCartList,
      clearCart,
      updateCartList,
    };
  },
  {
    //开启token持久化
    persist: true,
  }
);
