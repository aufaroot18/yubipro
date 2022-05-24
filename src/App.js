import Layout from "./layouts";
import Routing from "./routes";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routing />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
