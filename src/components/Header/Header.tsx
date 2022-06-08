import { Fragment, useRef } from "react";
import * as S from "./styled";
import { friendsIcon, plusIcon, profileIcon } from "assets";
import { useNavigate } from "react-router-dom";
import Portal, { PortalRef } from "components/Modal/Portal";
import MakeRoom from "components/Modal/MakeRoom/MakeRoom";
import Profile from "components/Modal/Profile/Profile";
import Friends from "components/Modal/Friends/Friends";

interface Nav {
  img: string;
  text: string;
  onClick: () => void;
}

const Header = () => {
  const navigate = useNavigate();
  const nav: Nav[] = [
    {
      img: plusIcon,
      text: "방 생성",
      onClick: () => portal1Ref.current?.open(),
    },
    {
      img: profileIcon,
      text: "프로필",
      onClick: () => portal2Ref.current?.open(),
    },
    {
      img: friendsIcon,
      text: "친구",
      onClick: () => portal3Ref.current?.open(),
    },
  ];

  const portal1Ref = useRef<PortalRef>(null);
  const portal2Ref = useRef<PortalRef>(null);
  const portal3Ref = useRef<PortalRef>(null);

  const navRender = nav.map((value, index) => {
    const { img, text, onClick } = value;

    return (
      <S.MenuContainer key={index} onClick={onClick}>
        <S.MenuImg src={img} alt={text} key={index} />
        <S.MenuName>{text}</S.MenuName>
      </S.MenuContainer>
    );
  });

  return (
    <Fragment>
      <S.HeaderContainer>
        <S.LogoImg onClick={() => navigate("/main")} />
        <S.MenuBar>{navRender}</S.MenuBar>
      </S.HeaderContainer>
      <Portal ref={portal1Ref}>
        <MakeRoom />
      </Portal>
      <Portal ref={portal2Ref}>
        <Profile />
      </Portal>
      <Portal ref={portal3Ref}>
        <Friends />
      </Portal>
    </Fragment>
  );
};

export default Header;
