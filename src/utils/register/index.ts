import uri from "constance/uri";
import { request } from "../axios";

interface DataType {
  id: string;
  password: string;
}

export const registry = (data: DataType) => {
  const response = request.post(uri.registry, data);
  return response;
};
