import React from "react";
import * as S from "./styled";

type PropsType = {
  children: React.ReactNode;
};

const Modal = ({ children }: PropsType) => {
  return (
    <S.ModalBackground>
      <S.ModalContainer>
        <S.PositionDiv>
          <S.CloseImg />
        </S.PositionDiv>
        <div>{children}</div>
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default Modal;
