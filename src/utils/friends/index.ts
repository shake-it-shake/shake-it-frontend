import uri from "constance/uri";
import instance from "utils/axios";

export const postFriends = async (user_id: any) => {
  const response = await instance.post(uri.friends, user_id);

  return response;
};

export const acceptFriends = async (user_id: any) => {
  const response = await instance.patch(uri.friends, user_id);

  return response;
};

export type FriendsListType = {
  friends: FriendsType[];
};

export type FriendsType  = {
  id: number;
  user_id: string;
  nickname: string;
  profile_path: string;
  room_id: string | null;
};

export const getFriends = async () => {
  const response = await instance.get<FriendsListType>(uri.friends);

  return response;
};

export const deleteFriends = async (user_id: any) => {
  const response = await instance.delete(uri.friends, user_id);

  return response;
};

export type ReFriendsListType = {
  requests: ReFriendsListType[];
};

export type ReFriendsType = {
  user_id: string;
  nickname: string;
  image_path: string;
};

export const getReFriends = async () => {
  const response = await instance.get<ReFriendsListType>(uri.reFriends);

  return response;
};
