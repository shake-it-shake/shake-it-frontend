import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "utils/login";
import * as S from "./styled";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    id: "",
    pw: "",
  });

  const { id, pw } = input;

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const loginReqeust = async () => {
    const data = {
      id: id,
      password: pw,
    }
    try {
      await login(data);
      navigate("/main");
    } catch{
      alert("로그인에 실패하셨습니다.");
    }

  }

  return (
    <Fragment>
      <S.Container>
        <S.LoginImg />
        <S.LoginContainer>
          <S.Title>로그인하고 흔들어보세요</S.Title>
          <S.LoginInput
            name="id"
            value={id}
            onChange={change}
            placeholder="아이디"
            autoComplete="off"
          />
          <S.LoginInput
            name="pw"
            value={pw}
            onChange={change}
            placeholder="비밀번호"
            type="password"
            autoComplete="off"
          />
          <S.LoginButton onClick={loginReqeust}>로그인</S.LoginButton>
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
