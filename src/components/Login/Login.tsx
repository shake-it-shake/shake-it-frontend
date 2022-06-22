import * as S from "./styled";
import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "utils/login";
import Portal, { PortalRef } from "components/Modal/Portal";
import Register from "components/Modal/Register/Register";
import ProfileSet from "components/Modal/ProfileSet/ProfileSet";
import { refresh } from "utils/refresh";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    id: "",
    pw: "",
  });

  const { id, pw } = input;

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/main");
    }
  }, []);

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
    };
    try {
      await login(data);
      navigate("/main");
    } catch {
      alert("로그인에 실패하셨습니다.");
    }
  };

  const handleModal = () => {
    portal1Ref.current?.open();
  };

  const portal1Ref = useRef<PortalRef>(null);
  const portal2Ref = useRef<PortalRef>(null);

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
            <S.SignUpText onClick={handleModal}>회원가입 하기</S.SignUpText>
          </S.Guide>
        </S.LoginContainer>
      </S.Container>
      <Portal ref={portal1Ref}>
        <Register propsRef1={portal1Ref} propsRef2={portal2Ref} />
      </Portal>
      <Portal ref={portal2Ref}>
        <ProfileSet />
      </Portal>
    </Fragment>
  );
};

export default Login;
