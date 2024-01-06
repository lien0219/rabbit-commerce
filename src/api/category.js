import httpInstance from "@/utils/http";

/**
 * @param {*} id 分类id
 * @return {*}
 */
export const getTopCategoryAPI = (id) => {
  return httpInstance({
    url: "/category",
    params: {
      id,
    },
  });
};
