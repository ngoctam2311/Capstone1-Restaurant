import React, { FC, ReactNode, useEffect, useState } from "react";
import Header from "../shared/header";
import Footer from "../shared/footer";
import { Box} from "@mui/material";
import { useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ModeContext } from "../../utils/mode-provider";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";

const hideHeader = [
  "/my-writing/[bookId]/write/[chapId]",
  "/book/[bookSlug]/[bookChapter]",
  "/my-writing/[bookId]/note/[id]",
];
const hideFooter = ["/my-reading", "/my-reading/bookmark/[id]"];

const DefaultLayout = ({ children }) => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { mode } = useContext(ModeContext);
  const themeOptions = {
    palette: {
      mode: mode === "light" ? "light" : "dark",
      primary: {
        main: "#8e3200",
      },
      secondary: {
        main: "#ffebc1",
      },
      info: {
        main: "#0288d1",
      },
    },
    typography: {
      fontFamily: "Plus Jakarta Sans",
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: mode === "light" ? "white" : "#161b22",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        {!hideHeader.includes(router.pathname) && <Header />}
        {/* <Header /> */}
        {/* <Header /> */}
        <Box
          sx={{
            flex: 1,
          }}
        >
          {children}
        </Box>
        {!hideFooter.includes(router.pathname) && <Footer mode={mode} />}
      </div>
    </ThemeProvider>
  );
};

export default DefaultLayout;
