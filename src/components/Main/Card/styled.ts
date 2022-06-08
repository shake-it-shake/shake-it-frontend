import styled from "@emotion/styled";
import { color } from "style/color";

export const CardContainer = styled.div`
  width: 100%;
  background-color: ${color.lightBlack};
  color: ${color.white};
  border-radius: 16px;
  padding: 23px 24px;
  min-width: 0px;
  z-index: 0;
`;

export const TopContent = styled.div`
  margin-bottom: 26px;
  display: flex;
  gap: 12px;
  overflow: hidden;
  min-width: 0px;
`;

export const RoomInfo = styled.div`
  flex: 1;
  min-width: 0px;
`;

export const RoomImg = styled.div<{ img: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const RoomTitle = styled.div`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 500;
`;

export const RoomMiddleInfo = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 8px;
`;

export const RoomHost = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const Time = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${color.lightGray};
`;

export const Member = styled.div`
  display: flex;
  position: relative;
  gap: 8px;
  overflow: hidden;
  min-width: 0px;
`;

export const MemberImg = styled.div<{
  index: number;
  left: number;
  url: string;
}>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-image: url(${(props) => props.url});
  background-color: ${color.darkGray};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  z-index: ${(props) => props.index};
  left: ${(props) => props.left}px;
`;

export const ImageWrapper = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  width: 10px;
  height: 20px;
  &:last-of-type {
    width: 20px;
  }
`;

export const MemberName = styled.div<{ left: number }>`
  color: ${color.lightGray};
  font-size: 14px;
  font-weight: 400;
  min-width: 0px;
  display: flex;
  gap: 4px;
  overflow: hidden;
`;

export const NameList = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Gauge = styled.div`
  width: 100%;
  height: 8px;
  z-index: 5;
  border-radius: 4px;
  background-color: ${color.darkGray};
  margin-bottom: 20px;
`;

export const RedGauge = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 8px;
  z-index: 10;
  border-radius: 4px;
  background-color: ${color.lightRed};
`;

export const RoomEnterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const RoomEnterNum = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const RoomMaxNum = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const EnterButton = styled.div`
  background-color: ${color.lightRed};
  border-radius: 12px;
  padding: 12px 166px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
