import { RoomType } from "utils/main";
import * as S from "./styled";

const Card = ({
  title,
  id,
  room_image,
  personnel,
  current_count,
  owner_name,
  member,
  created_at,
}: RoomType) => {
  const OpenTime = () => {
    const nowTime = new Date();
    const createdTime = new Date(created_at.toString().slice(0, -1));

    if (nowTime.getMinutes() <= createdTime.getMinutes() + 10) {
      return "방금 전 오픈";
    } else if (nowTime.getHours() - createdTime.getHours() < 1) {
      return `${nowTime.getMinutes() - createdTime.getMinutes()}분 전 오픈`;
    } else if (
      (nowTime.getTime() - createdTime.getTime()) / 1000 / 60 / 60 <
      24
    ) {
      return `${Math.floor(
        (nowTime.getTime() - createdTime.getTime()) / 1000 / 60 / 60
      )}시간 전 오픈`;
    } else {
      return `${nowTime.getDay() - createdTime.getDay()}일전 오픈`;
    }
  };

  return (
    <S.CardContainer>
      <S.TopContent>
        <S.RoomImg img={room_image} />
        <S.RoomInfo>
          <S.RoomTitle>{title}</S.RoomTitle>
          <S.RoomMiddleInfo>
            <S.RoomHost>{owner_name}</S.RoomHost>
            {OpenTime()}
          </S.RoomMiddleInfo>
          <S.Member>
            <div>
              <S.MemberImg index="2" left={0} />
              <S.MemberImg index="1" left={10} />
              <S.MemberImg index="0" left={20} />
            </div>
            <S.MemberName left={20 + 2 * 10 + 8}>
              {member[0][0]}, {member[0][1]} 외 4명 참여 중
            </S.MemberName>
          </S.Member>
        </S.RoomInfo>
      </S.TopContent>
      <S.Gauge>
        <S.RedGauge />
      </S.Gauge>
      <S.RoomEnterInfo>
        <S.RoomEnterNum>현재 {current_count}명 참여 중</S.RoomEnterNum>
        <S.RoomMaxNum>정원 {personnel}명</S.RoomMaxNum>
      </S.RoomEnterInfo>
      <S.EnterButton>입장</S.EnterButton>
    </S.CardContainer>
  );
};

export default Card;
