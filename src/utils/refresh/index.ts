import { AxiosRequestConfig } from "axios";
import uri from "../../constance/uri";
import { request } from "../axios";

interface TokenType {
  access_token: string;
  refresh_token: string;
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
  const refreshToken = localStorage.getItem("refresh_token");
  let accessToken = localStorage.getItem("access_token");

  if (!refreshToken || !expireAt) {
    alert("로그인을 하신 후, 서비스를 이용할 수 있습니다!");
    window.location.href = "/";
    localStorage.removeItem("expired_at");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return config;
  }

  if (new Date().getTime() > new Date(expireAt).getTime()) {
    const data = {
      refresh_token: refreshToken,
    };

    try {
      const response = await request.put<TokenType>(uri.refresh, data, {
        headers: {
          "REFRESH-TOKEN": refreshToken,
        },
      });
      const { access_token, refresh_token } = response.data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("expired_at", getDateWithAddHour(2).toString());
    } catch (error) {
      console.log(error);
    }
  }

  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
};

const refreshError = (err: any) => {
  localStorage.removeItem("expired_at");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export { refresh, refreshError };
