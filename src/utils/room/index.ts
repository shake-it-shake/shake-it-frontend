import uri from "constance/uri";
import instance from "../axios";

interface ReqeustType {
  title: string,
  personnel: number,
  image_path: string,
}

export const makeRoom = async (data:ReqeustType) => {
  console.log(data);
  const response = instance.post(uri.rooms, data);

  return response;
}