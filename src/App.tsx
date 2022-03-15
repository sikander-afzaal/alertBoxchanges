import { useMemo, useEffect, useState } from "react";
import $ from "jquery";

import { createTheme, ThemeProvider } from "@material-ui/core";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import NFT from "./components/NFT";
import Team from "./components/Team";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
import AlertBox from "./components/Alert Box/AlertBox.jsx";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 16px",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

const App = () => {
  useEffect(() => {
    $("#dark-overlay").click(function () {
      $(this).toggleClass("active");
      $("#video").toggleClass("active");
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div id="dark-overlay"></div>
      <AlertBox />
      <Navbar />
      <Hero />
      <About />
      <NFT />
      <Team />
      <Roadmap />
      <FAQ />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
