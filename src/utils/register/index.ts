import uri from "constance/uri";
import { request } from "../axios";

interface DataType {
  id: string;
  password: string;
}

export const registry = (data: DataType) => {
  try {
    const response = request.post(uri.registry, data);
    return response;
  } catch (error) {
    Promise.reject(error);
  }
};
