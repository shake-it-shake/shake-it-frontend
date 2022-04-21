import { Fragment } from "react";
import * as S from "./styled";

const Card = () => {
  return (
    <S.CardContainer>
      <S.TopContent>
        <S.RoomImg />
        <S.RoomInfo>
          <S.RoomTitle>마지막까지 흔들어볼까요~</S.RoomTitle>
          <S.RoomMiddleInfo>
            <S.RoomHost>이서준</S.RoomHost>
            <S.Time>30분 전 오픈</S.Time>
          </S.RoomMiddleInfo>
          <S.Member>
            <div>
              <S.MemberImg index="3" left={0} />
              <S.MemberImg index="2" left={10} />
              <S.MemberImg index="1" left={20} />
            </div>
            <S.MemberName>신희원, 이재성 외 4명 참여 중</S.MemberName>
          </S.Member>
        </S.RoomInfo>
      </S.TopContent>
      <S.Gauge>
        <S.RedGauge />
      </S.Gauge>
      <S.RoomEnterInfo>
        <S.RoomEnterNum>현재 6명 참여 중</S.RoomEnterNum>
        <S.RoomMaxNum>정원 12명</S.RoomMaxNum>
      </S.RoomEnterInfo>
      <S.EnterButton>입장</S.EnterButton>
    </S.CardContainer>
  );
};

export default Card;
