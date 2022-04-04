import React from "react";
import * as S from "./styled";

const Login = () => {

  return (
    <S.Container>
      <S.LoginImg />
      <S.LoginContainer>
        <S.Title>로그인하고 흔들어보세요</S.Title>
        <S.LoginInput name="Id" placeholder="아이디"/>
        <S.LoginInput name="Pw" placeholder="비밀번호" type="password"/>
        <S.LoginButton>로그인</S.LoginButton>
        <S.Guide>
          <S.GuideText>
            계정이 없으신가요?
          </S.GuideText>
          <S.SignUpText>
            회원가입 하기
          </S.SignUpText>
        </S.Guide>
      </S.LoginContainer>
    </S.Container>
  );
};

export default Login;
