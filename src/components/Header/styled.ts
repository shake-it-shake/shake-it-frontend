import styled from "@emotion/styled";
import { discoBacll } from "assets";
import { color } from "style/color";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${color.lightGray};
`;

export const LogoImg = styled.div`
  background-image: url(${discoBacll});
  width: 60px;
  height: 60px;
  margin-left: 50px;
  cursor: pointer;
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 26px;
  margin-right: 50px;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const MenuImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const MenuName = styled.div`
  color: ${color.white};
  font-size: 14px;
  font-weight: 400;
`;
