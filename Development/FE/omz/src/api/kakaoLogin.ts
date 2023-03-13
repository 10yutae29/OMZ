import axios from "axios";
import { instance } from ".";

export const getKakaoToken = (code: string) => {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  return axios({
    method: "post",
    url: "https://kauth.kakao.com/oauth/token",
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    data: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
  });
};

// export const getServerToken = (token:string) => {
//   return instance
// }
