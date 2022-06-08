import { Fragment, useEffect, useState } from "react";
import {
  acceptFriends,
  deleteFriends,
  getFriends,
  getReFriends,
  FriendsListType,
  ReFriendsListType,
} from "utils/friends";
import * as S from "./styled";

const Friends = () => {
  const [id, setId] = useState<string>("");
  const [friendsList, setList] = useState<FriendsListType | null>(null);
  const [reFriendsList, setReList] = useState<ReFriendsListType | null>(null);

  useEffect(() => {
    const id = localStorage.getItem("user_id");

    if (id) {
      setId(id);
    }

    getList();
  }, []);

  const getList = async () => {
    try {
      const friendsData = (await getFriends()).data;
      const reFriendsData = (await getReFriends()).data;

      setList(friendsData);
      setReList(reFriendsData);
    } catch (err) {
      console.log(err);
    }
  };

  const acceptFriend = async (user_id: string) => {
    const data = {
      user_id: user_id,
    };

    await acceptFriends(data);

    getList();
  };

  const followFriend = async (room_id: string) => {
    console.log(room_id);
  };

  const deleteFriend = async (user_id: string) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const data = {
        data: {
          user_id: user_id,
        },
      };

      await deleteFriends(data);

      getList();
    }
  };

  const friendsReContent = reFriendsList?.requests?.map((data: any, index) => {
    const { user_id, image_path, nickname } = data;

    return (
      <S.ContentBox key={index}>
        <S.LeftSide>
          <S.Profile img={image_path} />
          <S.Nickname>{nickname}의 요청</S.Nickname>
        </S.LeftSide>
        <S.RightSide>
          <S.AcceptButton onClick={() => acceptFriend(user_id)}>
            수락
          </S.AcceptButton>
        </S.RightSide>
      </S.ContentBox>
    );
  });

  const friendsContent = friendsList?.friends?.map((data: any) => {
    const { id, user_id, nickname, profile_path, room_id } = data;

    return (
      <S.ContentBox key={id}>
        <S.LeftSide>
          <S.Profile img={profile_path} />
          <S.Nickname>{nickname}</S.Nickname>
        </S.LeftSide>
        <S.RightSide>
          <S.FollowButton onClick={() => followFriend(room_id)}>
            따라가기
          </S.FollowButton>
          <S.DeleteButton onClick={() => deleteFriend(user_id)}>
            삭제
          </S.DeleteButton>
        </S.RightSide>
      </S.ContentBox>
    );
  });

  return (
    <Fragment>
      <S.SubTitle>친구 요청</S.SubTitle>
      {reFriendsList?.requests?.length !== 0 ? (
        <S.GroupBox>{friendsReContent}</S.GroupBox>
      ) : (
        <S.NoneText>친구 요청이 없습니다.</S.NoneText>
      )}
      <S.SubTitle>친구 목록</S.SubTitle>
      {friendsList?.friends?.length !== 0 ? (
        <S.GroupBox>{friendsContent}</S.GroupBox>
      ) : (
        <S.NoneText>친구가 없습니다.</S.NoneText>
      )}
    </Fragment>
  );
};

export default Friends;
