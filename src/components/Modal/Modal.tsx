import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProfileSet from "./ProfileSet/ProfileSet";
import Register from "./Register/Register";
import * as S from "./styled";

const Modal = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: "",
    pw: "",
    checkPw: "",
    nickname: "",
    profile: "",
  });

  const { id, pw, checkPw, nickname, profile } = data;

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  window.onkeyup = (e) => {
    if (e.key === "Escape") {
      navigate("/");
    }
  };

  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <S.PositionDiv>
          <S.CloseImg onClick={() => navigate("/")} />
        </S.PositionDiv>
        <Routes>
          <Route
            path="/info"
            element={
              <Register change={change} id={id} pw={pw} checkPw={checkPw} />
            }
          />
          <Route path="/profileset" element={<ProfileSet change={change} profile={profile} nickname={nickname}/>} />
        </Routes>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default Modal;
