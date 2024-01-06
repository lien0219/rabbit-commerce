import httpInstance from "@/utils/http";

export const getCategory = () => {
  return httpInstance({
    url: "home/category/head",
  });
};
