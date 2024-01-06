import httpInstance from "@/utils/http";

export const getBannerAPI = () => {
  return httpInstance({
    url: "/home/banner",
  });
};

export const findNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};

export const getHotAPI = () => {
  return httpInstance("/home/hot", {});
};
