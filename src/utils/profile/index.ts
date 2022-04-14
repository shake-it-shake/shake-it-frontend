import uri from "constance/uri";
import { request } from "../axios";

type SetDataProps = {
  nickname: string;
  image_path: string;
};

type GetDataProps = {
  id: string;
  nickname: string;
  image_path: string;
  room_id: number;
};

export const profileSet = async (data: SetDataProps) => {
  try {
    const response = await request.patch(uri.profleSet, data);
    return response;
  } catch (error) {
    Promise.reject(error);
  }
};

export const profileGet = async (userId: string) => {
  try {
    const response = await request.get<GetDataProps>(
      uri.profileGet.replace("USER_ID", userId)
    );
    return response;
  } catch (error) {
    Promise.reject(error);
  }
};
