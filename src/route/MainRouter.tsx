import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginContainer, MainContainer } from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/*" element={<LoginContainer />} />
      <Route path="/main" element={<MainContainer />} />
    </Routes>
  );
};

export default MainRouter;
