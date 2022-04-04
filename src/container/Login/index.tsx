import Login from "components/Login/Login";
import Modal from "components/Modal/Modal";
import Register from "components/Modal/Register/Register";

const LoginContainer = () => {
  return (
    <>
      <Login />
      <Modal children={<Register />}/>
    </>
  );
};

export default LoginContainer;