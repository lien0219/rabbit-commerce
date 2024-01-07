import httpInstance from "@/utils/http";

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url: "/member/cart",
    method: "post",
    data: {
      skuId,
      count,
    },
  });
};

// 获取最新的购物车列表
export const findNewCartListAPI = () => {
  return httpInstance({
    url: "/member/cart",
  });
};

// 删除购物车
export const delCartAPI = (ids) => {
  return httpInstance({
    url: "/member/cart",
    method: "delete",
    data: {
      ids: ids,
    },
  });
};

// 合并购物车
export const mergeCartAPI = (data) => {
  return httpInstance({
    url: "/member/cart/merge",
    method: "post",
    data,
  });
};

// 修改购物车
export const updCartAPI = (id, data) => {
  return httpInstance({
    url: `/member/cart/${id}`,
    method: "put",
    data,
  });
};

// 修改-购物车全选/取消
export const updCartSelectedAPI = (data) => {
  return httpInstance({
    url: "/member/cart/selected",
    method: "put",
    data,
  });
};
