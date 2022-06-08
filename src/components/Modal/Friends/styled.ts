import styled from "@emotion/styled";
import { testProfile } from "assets";
import { color } from "style/color";

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${color.white};
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const GroupBox = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const NoneText = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 500;
  color: ${color.darkWhite};
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${color.darkGray};
  border-radius: 12px;
  padding: 15px 20px;
  margin-bottom: 10px;
`;

export const LeftSide = styled.div`
  display: flex;
  gap: 10px;
`;

export const Profile = styled.div<{ img: string }>`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border: none;
  outline: none;
  border-radius: 50%;
  background-image: url(${testProfile});
  /* background-image: url(${(props) => props.img}); */
  background-position: center;
  background-size: cover;
`;

export const Nickname = styled.div`
  color: ${color.white};
  font-size: 16px;
  font-weight: 500;
`;

export const RightSide = styled.div`
display: flex;
  color: ${color.white};
  font-size: 16px;
  font-weight: 400;
  gap: 20px;
`;

export const FollowButton = styled.div`
  cursor: pointer;
`;

export const AcceptButton = styled.div`
  cursor: pointer;
`;

export const DeleteButton = styled.div`
  color: ${color.lightRed};
  cursor: pointer;
`;
