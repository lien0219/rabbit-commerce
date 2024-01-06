import httpInstance from "@/utils/http";

export const getBannerAPI = () => {
  return httpInstance({
    url: "/home/banner",
  });
};
