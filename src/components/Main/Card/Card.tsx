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
    const nowTime = new Date(new Date().toISOString().slice(0, -1));
    const createdTime = new Date(created_at.toString().slice(0, -1));

    return `${Math.floor(
      (nowTime.getTime() - createdTime.getTime()) / 60000
    )}분 전 오픈`;
  };

  const MemberImg = member.map((__, index) => {
    if (index > 2) return null;

    return (
      <S.MemberImg
        key={index}
        index={-index}
        left={index * 10}
        url={member[index].profile_path}
      />
    );
  });

  const MemberName = member.map((value) => value.name);
  const MemberLeft = () => {
    let margin = 18;
    member.map((__) => (margin += 10));

    if (current_count > 4) return 48;
    return margin;
  };

  const MemberCount = () => {
    const count = current_count - 2;

    if (count === -1) {
      return `${member[0]?.name} 님이 참여 중`;
    } else if (count === 0) {
      return `${MemberName.join(",")}님이 참여 중`;
    } else
      return `${member[0]?.name}, ${member[1]?.name} 외 ${
        current_count - 2
      }명 참여 중`;
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
          <S.Member title={MemberName.join(",")}>
            <div>{MemberImg}</div>
            <S.MemberName left={MemberLeft()}>{MemberCount()}</S.MemberName>
          </S.Member>
        </S.RoomInfo>
      </S.TopContent>
      <S.Gauge>
        <S.RedGauge width={(current_count / personnel) * 100} />
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
