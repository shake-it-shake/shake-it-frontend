import axios, { AxiosError, AxiosResponse } from "axios";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { registry } from "utils/register";
import * as S from "./styled";

type PropsType = {
  id: string;
  pw: string;
  checkPw: string;
  change: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Register = ({ change, id, pw, checkPw }: PropsType) => {
  const navigate = useNavigate();

  const idCheck = (id: string) => {
    const idTest = /\s/;
    if (idTest.test(id)) {
      alert("아이디에는 공백이 들어갈 수 없습니다.");
      return true;
    } else if (id.length <= 7) {
      alert("아이디는 최소 8자리 이상이어야 합니다.");
      return true;
    } else return false;
  };

  const pwCheck = (password: string) => {
    const pwTest = /\s/;
    const specialTest = /\W+/;
    const numberTest = /\d+/;
    if (pwTest.test(password)) {
      alert("비밀번호에는 공백이 들어갈 수 없습니다.");
      return true;
    } else if (password.length <= 7) {
      alert("비밀번호는 최소 8자리 이상이어야 합니다.");
      return true;
    } else if (!specialTest.test(password)) {
      alert("비밀번호에는 특수문자가 최소 1개 이상 포함돼야 합니다.");
      return true;
    } else if (!numberTest.test(password)) {
      alert("비밀번호에는 숫자가 최소 1개 이상 포함돼야 합니다.");
      return true;
    } else return false;
  };

  const registerReqeust = async () => {
    if (idCheck(id)) {
      return;
    }
    if (pwCheck(pw)) {
      return;
    }
    if (pw !== checkPw) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }
    const data = {
      id: id,
      password: pw,
    };

    try {
      await registry(data);
      alert("회원가입이 완료되었습니다.");
      navigate("/signup/profileset");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) {
          alert("중복되는 아이디입니다.");
        } else {
          alert("회원가입에 실패했습니다.");
        }
      }
    }
  };

  return (
    <Fragment>
      <S.Title>
        회원가입하고
        <br />
        흔들 준비 되셨나요?
      </S.Title>
      <S.GuideText>아이디와 비밀번호를 입력해주세요</S.GuideText>
      <S.RegisterInput
        name="id"
        value={id}
        onChange={change}
        placeholder="아이디"
        autoComplete="off"
      />
      <S.RegisterInput
        name="pw"
        value={pw}
        onChange={change}
        placeholder="비밀번호"
        type="password"
        autoComplete="off"
      />
      <S.RegisterInput
        name="checkPw"
        value={checkPw}
        onChange={change}
        placeholder="비밀번호 확인"
        type="password"
        autoComplete="off"
      />
      <S.RegisterButton onClick={registerReqeust}>회원가입</S.RegisterButton>
    </Fragment>
  );
};

export default Register;
