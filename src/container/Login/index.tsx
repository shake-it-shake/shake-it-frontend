import React from "react";
import { useState } from "react";
import Login from "components/Login/Login";
import Modal from "components/Modal/Modal";
import Register from "components/Modal/Register/Register";
import ProfileSet from "components/Modal/ProfileSet/ProfileSet";

type ContextType = {
  onOffModal: () => void;
  modal: boolean;
};

const LoginContainer = () => {
  const [modal, setModal] = useState<boolean>(false);

  const onOffModal = () => {
    setModal(!modal);
  };

  const value: ContextType = {
    modal,
    onOffModal,
  };


  return (
    <>
    {/* <ModalContext.Provider value={value}> */}
      <Login />
      <Modal children={<ProfileSet />} />
    {/* </ModalContext.Provider> */}
    </>
  );
};

export default LoginContainer;
