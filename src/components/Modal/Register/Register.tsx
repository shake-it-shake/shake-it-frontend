import uri from "constance/uri";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

type PropsType = {
  id: string;
  pw: string;
  checkPw: string;
  change: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Register = ({ change, id, pw, checkPw }: PropsType) => {
  const navigate = useNavigate();

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
      <S.RegisterButton onClick={() => navigate("/signup/profileset")}>
        회원가입
      </S.RegisterButton>
    </Fragment>
  );
};

export default Register;
