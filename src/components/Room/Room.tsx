import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { cam, noneRedCam, mic, noneRedMic, noneWhiteCam } from "assets";
import { useNavigate, useParams } from "react-router-dom";
import { makeAttendee } from "utils/room";
import { MeetingSessionConfiguration } from "amazon-chime-sdk-js";
import {
  LocalVideo,
  useLocalVideo,
  useMeetingManager,
  useRosterState,
  useToggleLocalMute,
} from "amazon-chime-sdk-component-library-react";

const Room = () => {
  const [isMic, setIsMic] = useState<boolean>(true);
  const [isCam, setIsCam] = useState<boolean>(true);
  const [micValue, setMicValue] = useState<number>(50);
  const navigate = useNavigate();
  const params = useParams();

  const { toggleVideo, isVideoEnabled } = useLocalVideo();
  const { roster } = useRosterState();
  const attendee = Object.values(roster);
  const meetingManager = useMeetingManager();
  const { toggleMute } = useToggleLocalMute();

  useEffect(() => {
    setChime();
  }, []);

  useEffect(() => {
    async function toggle() {
      if (!isVideoEnabled && meetingManager.meetingStatus === 1) {
        await toggleVideo();
      }
    }

    toggle();
  }, [isVideoEnabled, meetingManager.meetingStatus]);

  const setChime = async () => {
    const data = (await makeAttendee(String(params.roomId))).data;
    const meetingData = data.Meeting;
    const attendeeData = data.Attendance;
    const meetingSessionConfiguration = new MeetingSessionConfiguration(
      meetingData,
      attendeeData
    );

    await meetingManager.join(meetingSessionConfiguration);
    await meetingManager.start();
    await meetingManager.audioVideo?.startLocalVideoTile();
  };

  useEffect(() => {
    console.log(attendee);
  }, [roster]);

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

  const tiles = attendee.map((data, index) => {
    console.log("asdd", data);
    if (attendee.length <= 4) {
      return <S.SmallCam nameplate={data.name} key={index} />;
    } else {
      return <S.BigCam nameplate={String(index)} key={index} />;
    }
  });

  return (
    <S.Container>
      <S.CamContainer>
        <LocalVideo />
        <S.CamWrap>{tiles}</S.CamWrap>
      </S.CamContainer>
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
    </S.Container>
  );
};

export default Room;
