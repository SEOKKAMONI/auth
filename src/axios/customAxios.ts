import axios from "axios";

// axios interceptor

const customAxios = axios.create({
  // customAxios 작성
});

customAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 토큰 재발급 로직
  }
);
export { customAxios };
