import styled from "@emotion/styled";
import { color } from "style/color";

export const CardContainer = styled.div`
  width: 100%;
  background-color: ${color.lightBlack};
  color: ${color.white};
  border-radius: 16px;
  padding: 23px 24px;
`;

export const TopContent = styled.div`
  margin-bottom: 26px;
  display: flex;
  gap: 12px;
`;

export const RoomInfo = styled.div`
  flex: 1;
`;

export const RoomImg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${color.gray};
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
  justify-content: space-between;
`;

export const MemberImg = styled.div<{ index: string; left: number }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${color.gray};
  position: absolute;
  z-index: ${(props) => props.index};
  left: ${(props) => props.left}px;
  border: solid 1px white;
`;

export const MemberName = styled.div`
  color: ${color.lightGray};
  font-size: 14px;
  font-weight: 400;
`;

export const Gauge = styled.div`
  width: 100%;
  height: 8px;
  z-index: 5;
  border-radius: 4px;
  background-color: ${color.darkGray};
  margin-bottom: 20px;
`;

export const RedGauge = styled.div`
  width: 50%;
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
