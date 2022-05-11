import styled from "@emotion/styled";
import { closeIcon } from "assets";
import { color } from "style/color";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.65);
  backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div`
  background-color: ${color.lightBlack};
  width: 436px;
  border-radius: 12px;
  padding: 40px 50px;
`;

export const PositionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const CloseImg = styled.svg`
  background-image: url(${closeIcon});
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
