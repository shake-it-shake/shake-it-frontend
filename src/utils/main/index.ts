import uri from "constance/uri";
import instance from "../axios";

type RoomsType = {
  rooms: RoomType[];
};

export type RoomType = {
  id: number;
  title: string;
  room_image: string;
  personnel: number;
  current_count: number;
  owner_name: string;
  created_at: Date;
  member: {
    name: string;
    profile_path: string;
  }[];
};

export const getRooms = async () => {
  const response = await instance.get<RoomsType>(uri.rooms);
  return response;
};
