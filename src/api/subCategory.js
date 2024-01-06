import httpInstance from "@/utils/http";

/**
 * @param {*} id 分类id
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};

/**
 * @data {
 *  categoryId: 1005000 ,
 *  page: 1,
 *  pageSize: 20,
 *  sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 * }
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return httpInstance({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};
