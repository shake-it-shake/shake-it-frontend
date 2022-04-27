import { AxiosRequestConfig } from "axios";
import uri from "../../constance/uri";
import { request } from "../axios";

interface TokenType {
  accessToken: string;
  refreshToken: string;
  expired_at: Date;
}

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};

const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const expireAt = localStorage.getItem("expired_at");
  const refresh_token = localStorage.getItem("refresh_token");
  let access_token = localStorage.getItem("access_token");

  if (!refresh_token || !expireAt) {
    //리프레시 토큰이 없으면 로그인 상태가 아님
    alert("로그인을 하신 후, 서비스를 이용할 수 있습니다!");
    window.location.href = "/";
    localStorage.removeItem("expired_at");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return config;
  }

  if (new Date().getTime() > new Date(expireAt).getTime()) {
    //어세스 토큰 만료
    const data = {
      refresh_token: refresh_token,
    };

    const { accessToken, refreshToken } = (
      await request.put<TokenType>(uri.refresh, data, {
        headers: {
          "REFRESH-TOKEN": refresh_token,
        },
      })
    ).data;

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem("expired_at", getDateWithAddHour(2).toString());
  }

  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }

  return config;
};

const refreshError = (err: any) => {
  localStorage.removeItem("expired_at");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export { refresh, refreshError };
