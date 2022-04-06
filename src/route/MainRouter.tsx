import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginContainer } from "../container";

const MainRouter: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/*" element={<LoginContainer />} />
    </Routes>
  );
};

export default MainRouter;
