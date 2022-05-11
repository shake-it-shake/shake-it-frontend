import styled from "@emotion/styled";
import { testProfile } from "assets";
import { color } from "style/color";

export const Title = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 26px;
  margin-bottom: 12px;
`;

export const GuideText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${color.lightGray};
  margin-bottom: 30px;
`;

export const ProfileButton = styled.button`
  display: block;
  width: 128px;
  height: 128px;
  overflow: hidden;
  margin: 0px auto 12px auto;
  border: none;
  outline: none;
  border-radius: 50%;
  background-image: url(${testProfile});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

export const ProfileFile = styled.input`
  display: none;
`;

export const NicknameInput = styled.input`
  font-size: 16px;
  font-weight: 400;
  color: ${color.lightGray};
  width: 100%;
  padding: 14px 16px;
  background-color: transparent;
  border: solid 1px ${color.lightGray};
  border-radius: 12px;
  outline: none;
  box-shadow: 0 0 1px 0 ${color.lightGray} inset, 0 0 1px 0 ${color.lightGray};
  ::placeholder {
    color: ${color.gray};
  }
  margin-bottom: 65px;
`;

export const ProfileSetButton = styled.button`
  background-color: ${color.lightRed};
  color: ${color.white};
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  padding: 12px 152px;
  cursor: pointer;
`;
