import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <S.Container>
        <S.LoginImg />
        <S.LoginContainer>
          <S.Title>로그인하고 흔들어보세요</S.Title>
          <S.LoginInput name="Id" placeholder="아이디" autoComplete="off" />
          <S.LoginInput
            name="Pw"
            placeholder="비밀번호"
            type="password"
            autoComplete="off"
          />
          <S.LoginButton>로그인</S.LoginButton>
          <S.Guide>
            <S.GuideText>계정이 없으신가요?</S.GuideText>
            <S.SignUpText onClick={() => navigate("/signup/info")}>
              회원가입 하기
            </S.SignUpText>
          </S.Guide>
        </S.LoginContainer>
      </S.Container>
    </Fragment>
  );
};

export default Login;
