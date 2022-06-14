import React, { Fragment, useEffect, useState } from "react";
import * as S from "./styled";
import { cam, noneRedCam, mic, noneRedMic, noneWhiteCam } from "assets";

const Room = () => {
  const [isMic, setIsMic] = useState<boolean>(true);
  const [isCam, setIsCam] = useState<boolean>(true);
  const [micValue, setMicValue] = useState<number>(50);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMicValue(Number(e.target.value));
  };

  useEffect(() => {
    if (micValue) {
      setIsMic(true);
    } else {
      setIsMic(false);
    }
  }, [micValue]);

  const micHandle = () => {
    if(isMic){
      setMicValue(0);
    }
    
    setIsMic(!isMic);
  };

  const camHandle = () => {
    setIsCam(!isCam);
  };


  return (
    <S.Container>
      <S.CamContainer>
        <S.Cams>
          <S.GridContainer2>
            <S.Cam2>12</S.Cam2>
            <S.Cam2>12</S.Cam2>
            <S.Cam2>12</S.Cam2>
            <S.Cam2>12</S.Cam2>
            <S.Cam2>12</S.Cam2>
            <S.Cam2>12</S.Cam2>
            <S.Cam2>12</S.Cam2>
            <S.Cam2>12</S.Cam2>
          </S.GridContainer2>
        </S.Cams>
        <S.Controller>
          <S.ControllerLeft>
            <S.BottomMic onClick={micHandle} mic={isMic ? mic : noneRedMic} />
            <S.GageBar
              type="range"
              min="0"
              max="100"
              val={micValue}
              value={micValue}
              onChange={change}
              name="micValue"
            />
            <S.BottomCam onClick={camHandle} cam={isCam ? cam : noneRedCam} />
          </S.ControllerLeft>
          <S.ExitButton>방 나가기</S.ExitButton>
        </S.Controller>
      </S.CamContainer>
      <S.Chat>
        <S.SendButton>전송</S.SendButton>
        <S.Input placeholder="채팅을 입력하세요." />
        <S.ContentContainer>
          <S.ChatContent>클럽명 방에 입장하셨습니다.</S.ChatContent>
          <S.ChatContent>행정실장병신 : 랑러아러아ㅓ</S.ChatContent>
          <S.ChatContent>랑러아러아ㅓ</S.ChatContent>
          <S.ChatContent>랑러아러아ㅓ</S.ChatContent>
          <S.ChatContent>랑러아러아ㅓ</S.ChatContent>
        </S.ContentContainer>
      </S.Chat>
    </S.Container>
  );
};

export default Room;
