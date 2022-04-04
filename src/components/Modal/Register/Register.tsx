import React from 'react'
import * as S from "./styled";

const Register = () => {
  return (
    <>
      <S.Title>
        회원가입하고<br />흔들 준비 되셨나요?
      </S.Title>
      <S.GuideText>
        아이디와 비밀번호를 입력해주세요.
      </S.GuideText>
      <S.RegisterInput placeholder='아이디'/>
      <S.RegisterInput placeholder='비밀번호'/>
      <S.RegisterInput placeholder='비밀번호 확인'/>
      <S.RegisterButton>
        회원가입
      </S.RegisterButton>
    </>
  )
}

export default Register;