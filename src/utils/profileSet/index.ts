import uri from "constance/uri";
import { request } from "../axios";

type DataProps = {
  nickname: string;
  image_path: string;
};

export const profileSet = async (data: DataProps) => {
  try {
    const response = await request.patch(uri.prifleSet, data);
    return response;
  } catch (error) {
    Promise.reject(error);
  }
};
