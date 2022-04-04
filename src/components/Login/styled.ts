import styled from "@emotion/styled";
import { login } from "assets";
import { color } from "style/color";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 180px;
`

export const LoginImg = styled.svg`
  background-image: url(${login});
  width: 516px;
  height: 575px;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${color.white};
  margin-bottom: 62px;
`

export const LoginInput = styled.input`
  margin-bottom: 12px;
  padding: 13px 16px;
  color: white;
  font-size: 16px;
  background-color: ${color.black};
  border: solid 1px ${color.gray};
  border-radius: 12px;
  outline: none;
  box-shadow: 0 0 1px 0 ${color.gray} inset, 0 0 1px 0 ${color.gray};
  ::placeholder {
    color: ${color.gray}
  }
`

export const LoginButton = styled.button`
  margin-top: 18px;
  margin-bottom: 26px;
  background-color: ${color.lightRed};
  cursor: pointer;
  display: flex;
  padding: 13px 144px;
  color: ${color.white};
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 12px;
`

export const Guide = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 16px;
`

export const GuideText = styled.div`
  color: ${color.white};
  margin-right: 20px;
`

export const SignUpText = styled.div`
  color: ${color.lightRed};
  cursor: pointer;
`