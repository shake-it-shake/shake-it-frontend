import styled from "@emotion/styled";
import { testProfile } from "assets";
import { color } from "style/color";

export const RoomImg = styled.button`
  display: block;
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-bottom: 25px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-image: url(${testProfile});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

export const RoomFile = styled.input`
  display: none;
`;

export const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  color: ${color.white};
`;

export const TitleInput = styled.input`
  width: 100%;
  color: ${color.white};
  font-size: 16px;
  font-weight: 700;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 15px;
  background-color: transparent;
  outline: none;
  border: solid 1px ${color.gray};
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const GageNum = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const GageFigure = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${color.white};
`;

export const GageBar = styled.input<{ val: number }>`
  display: block;
  appearance: none;
  width: 100%;
  height: 8px;
  margin-bottom: 60px;
  cursor: ew-resize;
  background-color: ${color.darkGray};
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

export const MakeButton = styled.div`
  color: ${color.white};
  background-color: ${color.lightRed};
  font-size: 16px;
  font-weight: 500;
  padding: 12px 138px;
  border-radius: 12px;
  margin-bottom: 20px;
  cursor: pointer;
`;
