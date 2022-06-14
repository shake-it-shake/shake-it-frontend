import styled from "@emotion/styled";
import { color } from "style/color";

export const Container = styled.div`
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const CamContainer = styled.div`
  flex: 7.5 1 0;
  display: flex;
  flex-direction: column;
`;

export const Cams = styled.div`
  flex: 9 1 0;
  width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const GridContainer1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
`;

export const GridContainer2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
`;

export const Cam1 = styled.div`
  width: 632px;
  height: 355px;
  border: solid 1px ${color.white};
`;

export const Cam2 = styled.div`
  width: 416px;
  height: 234px;
  border: solid 1px ${color.white};
`;

export const Controller = styled.div`
  flex: 1 1 0;
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

export const Chat = styled.div`
  flex: 2 1 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  padding: 27px 1em;
  background-color: ${color.lightBlack};
`;

export const Input = styled.textarea`
  border: solid 1px ${color.white};
  border-radius: 10px;
  padding-top: 18px;
  padding-left: 15px;
  width: 100%;
  color: ${color.white};
  outline: none;
  margin-bottom: 15px;
  background: transparent;
  ::placeholder {
    color: ${color.darkWhite};
  }
  margin-top: 5px;
  resize: none;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
`;

export const ChatContent = styled.div`
  color: ${color.white};
`;