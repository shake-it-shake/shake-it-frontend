import styled from "@emotion/styled";
import { testProfile } from "assets";
import { color } from "style/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImg = styled.input`
  display: none;
`;

export const ProfileButton = styled.button<{ img: string; events: string }>`
  display: block;
  width: 128px;
  height: 128px;
  overflow: hidden;
  margin: 0px auto 10px auto;
  border: none;
  outline: none;
  border-radius: 50%;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  pointer-events: ${(props) => props.events};
  cursor: pointer;
`;

export const Nickname = styled.input<{ events: string }>`
  font-size: 20px;
  font-weight: 700;
  background-color: transparent;
  outline: ${(props) => props.events};
  color: ${color.white};
  text-align: center;
  margin-bottom: 5px;

  pointer-events: ${(props) => props.events};
`;

export const ModifyButton = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${color.gray};
  cursor: pointer;
  margin-bottom: 40px;
`;

export const ButtonContaine = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 400;
  color: ${color.white};
`;

export const Logout = styled.div`
  padding: 12px 43px;
  background-color: transparent;
  border-radius: 12px;
  border: solid 1px ${color.white};
  cursor: pointer;
  box-shadow: 0 0 1px 0 ${color.lightGray} inset, 0 0 1px 0 ${color.lightGray};
`;

export const Withdrawal = styled.div`
  padding: 12px 43px;
  border-radius: 12px;
  background-color: ${color.lightRed};
  cursor: pointer;
`;
