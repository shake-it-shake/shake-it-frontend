import uri from "constance/uri";
import { request } from "../axios";

interface DataType {
  id: string;
  password: string;
}

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

export const login = async (data: DataType) => {
  const response = await request.post<TokenType>(uri.login, data);

  localStorage.setItem("user_id", data.id);
  localStorage.setItem("access_token", response.data.access_token);
  localStorage.setItem("refresh_token", response.data.refresh_token);
  localStorage.setItem("expired_at", getDateWithAddHour(2).toString());

  return response;
};
