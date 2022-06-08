import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import reactDom from "react-dom";
import * as S from "./styled";

export interface PortalRef {
  open: () => void;
  close: () => void;
}

interface PortalPropsType {
  children: React.ReactNode;
}

const Portal = forwardRef<PortalRef, PortalPropsType>(({ children }, ref) => {
  const el = document.getElementById("modal");
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    
    document.body.style.overflow = "unset";
    setIsOpen(false);
  }, []);

  const keyClose = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      close();
    }
  };

  window.addEventListener("keyup", keyClose);

  const renderChildren = useMemo(
    () => (
      <S.ModalBackground>
        <S.ModalContainer>
          <S.PositionDiv>
            <S.CloseImg onClick={close} />
          </S.PositionDiv>
          {children}
        </S.ModalContainer>
      </S.ModalBackground>
    ),
    [children, close]
  );

  useImperativeHandle(ref, () => ({ open, close }));

  if (el && children && isOpen) {
    return reactDom.createPortal(renderChildren, el);
  }

  return <></>;
});

export default Portal;
