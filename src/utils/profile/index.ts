import uri from "constance/uri";
import instance from "../axios";

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
  const response = await instance.patch(uri.profleSet, data);
  return response;
};

export const profileGet = async (userId: string) => {
  const response = await instance.get<GetDataProps>(
    uri.profileGet.replace("USER_ID", userId)
  );
  return response;
};

export const imgUpload = async (file: File) => {
  const formdata = new FormData();
  formdata.append("file", file);
  const response = await instance.post(uri.images, formdata);

  return response;
};
