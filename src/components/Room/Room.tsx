import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { cam, noneRedCam, mic, noneRedMic, noneWhiteCam } from "assets";
import { useNavigate, useParams } from "react-router-dom";
import { makeAttendee } from "utils/room";
import {
  ActiveSpeakerPolicy,
  EventController,
  MeetingSessionConfiguration,
} from "amazon-chime-sdk-js";
import {
  DeviceLabels,
  DeviceLabelTrigger,
  useMeetingManager,
  useLocalVideo,
  VideoTileGrid,
  LocalVideo,
  VideoTile,
} from "amazon-chime-sdk-component-library-react";

interface MeetingManagerJoinOptions {
  deviceLabels?: DeviceLabels | DeviceLabelTrigger;
  eventController?: EventController;
  enableWebAudio?: boolean;
  activeSpeakerPolicy?: ActiveSpeakerPolicy;
}

const Room = () => {
  const { toggleVideo } = useLocalVideo();
  const [isMic, setIsMic] = useState<boolean>(true);
  const [isCam, setIsCam] = useState<boolean>(true);
  const [micValue, setMicValue] = useState<number>(50);
  const navigate = useNavigate();
  const params = useParams();

  const meetingManager = useMeetingManager();

  useEffect(() => {
    setChime();
  }, []);

  const setChime = async () => {
    const data = (await makeAttendee(String(params.roomId))).data;
    const meetingData = data.Meeting;
    const attendeeData = data.Attendance;

    console.log(attendeeData, meetingData);

    const meetingSessionConfiguration = new MeetingSessionConfiguration(
      meetingData,
      attendeeData
    );

    // const options: MeetingManagerJoinOptions = {
    //   deviceLabels: DeviceLabels.Video,
    // };

    // await meetingManager.join(meetingSessionConfiguration, options);
    await meetingManager.join(meetingSessionConfiguration);
    await meetingManager.start();
  };

  const leaveRoom = async () => {
    await meetingManager.leave();
    navigate("/main");
  };

  useEffect(() => {
    if (micValue) {
      setIsMic(true);
    } else {
      setIsMic(false);
    }
  }, [micValue]);

  const micHandle = () => {
    if (isMic) {
      setMicValue(0);
    }

    setIsMic(!isMic);
  };

  const camHandle = () => {
    setIsCam(!isCam);
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMicValue(Number(e.target.value));
  };

  return (
    <S.Container>
      <S.CamContainer>
        <S.Cams>
          <S.GridContainer2>
            <VideoTile nameplate="test"/>
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
          <S.ExitButton onClick={leaveRoom}>방 나가기</S.ExitButton>
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
