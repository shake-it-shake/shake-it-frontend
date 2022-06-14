import { useNavigate } from "react-router-dom";
import { RoomType } from "utils/main";
import * as S from "./styled";

const Card = ({
  title,
  id,
  room_image,
  personnel,
  current_count,
  owner_name,
  members,
  created_at,
}: RoomType) => {
  const navigate = useNavigate();
  const TimeLag = () => {
    const nowTime = new Date(new Date().toISOString().slice(0, -1));
    const createdTime = new Date(created_at.toString().slice(0, -1));

    return `${Math.floor(
      (nowTime.getTime() - createdTime.getTime()) / 60000
    )}분 전 오픈`;
  };

  const MemberImg = members.map((__, index) => {
    if (index > 2) return null;

    return (
      <S.ImageContainer key={index}>
        <S.MemberImg
          index={-index}
          left={index * 10}
          url={members[index].profile_path}
        />
      </S.ImageContainer>
    );
  });

  const MemberName = members.map((value) => value.name);
  const MemberLeft = () => {
    let margin = 18;
    members.map((__) => (margin += 10));

    if (current_count > 4) return 48;
    return margin;
  };

  const MemberNameList = () => {
    return `${MemberName.join(",")}`;
  };

  const MemberJoinText = () => {
    const count = current_count - 3;

    if (count > 0) return `외 ${current_count - 3}명 참여 중`;
    else return `참여 중`;
  };

  return (
    <S.CardContainer>
      <S.TopContent>
        <S.RoomImg img={room_image} />
        <S.RoomInfo>
          <S.RoomTitle>{title}</S.RoomTitle>
          <S.RoomMiddleInfo>
            <S.RoomHost>{owner_name}</S.RoomHost>
            <S.Time>{TimeLag()}</S.Time>
          </S.RoomMiddleInfo>
          <S.Member title={MemberNameList()}>
            <S.ImageWrapper>{MemberImg}</S.ImageWrapper>
            <S.MemberName left={MemberLeft()}>
              <S.NameList>{MemberNameList()}</S.NameList>
              <div>{MemberJoinText()}</div>
            </S.MemberName>
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
      <S.EnterButton onClick={()=> navigate(`/room/${id}`)}>입장</S.EnterButton>
    </S.CardContainer>
  );
};

export default Card;
