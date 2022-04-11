import uri from "constance/uri";
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

  const registerReqeust = async () => {
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
      navigate("/signup/profileset");
    } catch {
      alert("회원가입에 실패하셨습니다.");
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
