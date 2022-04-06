import { Fragment } from "react";
import Login from "components/Login/Login";
import Modal from "components/Modal/Modal";
import { Route, Routes } from "react-router-dom";

const LoginContainer = () => {
  return (
    <Fragment>
      <Login />
      <Routes>
        <Route path="/signup/*" element={<Modal />} />
      </Routes>
    </Fragment>
  );
};

export default LoginContainer;
