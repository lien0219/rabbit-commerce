import httpInstance from "@/utils/http";

export const loginAPI = ({ account, password }) => {
  return httpInstance({
    url: "/login",
    method: "POST",
    data: {
      account: account,
      password: password,
    },
  });
};
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url: "/goods/relevant",
    params: {
      limit,
    },
  });
};
