import Layout from "./layouts";
import Routing from "./routes";
import Modal from "react-modal";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routing />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
