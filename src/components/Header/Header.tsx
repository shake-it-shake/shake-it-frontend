import React, { Fragment } from "react";
import * as S from "./styled";
import { friendsIcon, plusIcon, profileIcon } from "assets";

interface Nav {
  img: string;
  text: string;
}

const Header = () => {
  const nav: Nav[] = [
    {
      img: plusIcon,
      text: "방 생성",
    },
    {
      img: profileIcon,
      text: "프로필",
    },
    {
      img: friendsIcon,
      text: "친구",
    },
  ];

  const navRender = nav.map((value, index) => {
    const { img, text } = value;

    return (
      <S.MenuContainer>
        <S.MenuImg src={img} alt={text} key={index} />
        <S.MenuName>{text}</S.MenuName>
      </S.MenuContainer>
    );
  });

  return (
    <Fragment>
      <S.HeaderContainer>
        <S.LogoImg />
        <S.MenuBar>{navRender}</S.MenuBar>
      </S.HeaderContainer>
    </Fragment>
  );
};

export default Header;
