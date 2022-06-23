import styled from "styled-components";
import {
  LocalVideo,
  RemoteVideo,
} from "amazon-chime-sdk-component-library-react";
import { color } from "style/color";

export const Container = styled.div`
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const CamContainer = styled.div`
  flex: 10 1 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const MarginContainer = styled.div`
  width: 1280px;
  height: 720px;
  background-color: grey;
  display: flex;
`;
export const CamWrap = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: transparent;
`;

export const BigMyCam = styled(LocalVideo)`
  width: 624px;
  height: 351px;
  border: solid 1px ${color.white};
`;

export const SmallMyCam = styled(LocalVideo)`
  width: 416px;
  height: 234px;
  border: solid 1px ${color.white};
`;

export const BigCam = styled(RemoteVideo)`
  width: 624px;
  height: 351px;
  border: solid 1px ${color.white};
`;

export const SmallCam = styled(RemoteVideo)`
  width: 416px;
  height: 234px;
  border: solid 1px ${color.white};
`;

export const Controller = styled.div`
  width: 100%;
  padding: 1em 0 1em 0;
  border-top: solid 1px ${color.lightBlack};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ControllerLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const BottomMic = styled.div<{ mic: string }>`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.mic});
  margin-left: 4em;
`;

export const GageBar = styled.input<{ val: number }>`
  margin-left: 1em;
  display: block;
  appearance: none;
  width: 14em;
  height: 8px;
  cursor: ew-resize;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    ${color.lightRed} 0%,
    ${color.lightRed} ${(props) => props.val + "%"},
    ${color.darkGray} ${(props) => props.val + "%"},
    ${color.darkGray} 0%
  );

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 8px;
  }
  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    width: 16px;
    height: 16px;
    background: ${color.white};
    border-radius: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const BottomCam = styled.div<{ cam: string }>`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.cam});
  margin-left: 3em;
`;

export const ExitButton = styled.div`
  padding: 14px 37px;
  font-size: 16px;
  font-weight: 500;
  background-color: ${color.lightRed};
  border-radius: 12px;
  cursor: pointer;
  margin-right: 3em;
`;

export const SendButton = styled.div`
  padding: 14px 35px;
  font-size: 16px;
  font-weight: 500;
  background-color: ${color.lightRed};
  border-radius: 8px;
  cursor: pointer;
  margin-right: 0.1rem;
`;
