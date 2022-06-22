import RootRouter from "route";
import { Global } from "@emotion/react";
import { reset } from "style/globalStyled";
import {
  darkTheme
} from "amazon-chime-sdk-component-library-react";
import { ThemeProvider } from "styled-components";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Global styles={reset} />
      <RootRouter />
    </ThemeProvider>
  );
};

export default App;
