import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { GlobalStyle } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  const theme = {
    color: {
      black: "#0F171C",
      sharpblack: "#000",
      white: "#ffffff",
      green: " #0B8141",
      gray: "#8D9194",
      darkgray: "#363D42",
      lightgray: "#F4F5F6",
      olive: "#88a532",
      darkgreen:"#0b8141",
      blue:"blue"
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
