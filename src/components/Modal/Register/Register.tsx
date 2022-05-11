import axios from "axios";
import { Fragment, useRef, useState } from "react";
import { registry } from "utils/register";
import { PortalRef } from "../Portal";
import * as S from "./styled";

interface PropsType {
  propsRef1: React.RefObject<PortalRef>;
  propsRef2: React.RefObject<PortalRef>;
}

const Register = ({ propsRef1, propsRef2 }: PropsType): JSX.Element => {
  const [data, setData] = useState({
    id: "",
    pw: "",
    checkPw: "",
  });

  const { id, pw, checkPw } = data;

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

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
    const stringTest = /[ㄱ-ㅎ|가-힣|a-z|A-Z]+/;
    const specialTest = /\W+/;
    const numberTest = /\d+/;
    if (pwTest.test(password)) {
      alert("비밀번호에는 공백이 들어갈 수 없습니다.");
      return true;
    } else if (password.length <= 7) {
      alert("비밀번호는 최소 8자리 이상이어야 합니다.");
      return true;
    } else if (!stringTest.test(password)) {
      alert("문자");
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
      alert("회원가입을 완료했습니다.");
      handleModal();
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

  const handleModal = () => {
    propsRef1.current?.close();
    propsRef2.current?.open();
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
