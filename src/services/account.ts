import request from "@/utils/request";

const BASE_URL = "/v1/account";

export async function queryCurrentUser() {
  return request(`${BASE_URL}/users/self`, {
    method: "GET",
  });
}

export async function queryUserList() {
  return null;
}
