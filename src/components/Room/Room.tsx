import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { mic, noneRedMic } from "assets";
import { useNavigate, useParams } from "react-router-dom";
import { makeAttendee, leaveRoom } from "utils/room";
import { MeetingSessionConfiguration } from "amazon-chime-sdk-js";
import {
  useLocalVideo,
  useMeetingManager,
  useRosterState,
} from "amazon-chime-sdk-component-library-react";

const Room = () => {
  const [isMic, setIsMic] = useState<boolean>(true);
  const [micValue, setMicValue] = useState<number>(50);
  const navigate = useNavigate();
  const params = useParams();

  const { toggleVideo, isVideoEnabled } = useLocalVideo();
  const { roster } = useRosterState();
  const attendee = Object.values(roster);
  const meetingManager = useMeetingManager();

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
  };

  const leaveButton = async () => {
    await meetingManager.leave();
    await leaveRoom();

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

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMicValue(Number(e.target.value));
  };

  const cams = attendee.map((data, index) => {
    const myId = localStorage.getItem("user_id");
    if (data.externalUserId === myId) {
      if (attendee.length > 4) {
        return <S.SmallMyCam key={index} />;
      } else {
        return <S.BigMyCam key={index} />;
      }
    } else {
      if (attendee.length > 4) {
        return <S.SmallMyCam key={index} />;
      } else {
        return <S.BigCam key={index} tileId={index} />;
      }
    }
  });

  return (
    <S.Container>
      <S.CamContainer>
        <S.CamWrap>{cams}</S.CamWrap>
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
        </S.ControllerLeft>
        <S.ExitButton onClick={leaveButton}>방 나가기</S.ExitButton>
      </S.Controller>
    </S.Container>
  );
};

export default Room;
