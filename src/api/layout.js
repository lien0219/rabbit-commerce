import httpInstance from "@/utils/http";

export const getCategoryAPI = () => {
  return httpInstance({
    url: "/home/category/head",
  });
};
