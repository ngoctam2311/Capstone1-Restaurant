"use client";

import { Inter } from "next/font/google";
import { ReduxProvider } from "../redux/provider";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/navigation";
import { SnackbarProvider, closeSnackbar } from "notistack";
// import { makeStyles } from "@mat";
import { ModeProvider } from "../utils/mode-provider";
import DefaultLayout from "../components/layout/default-layout";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/global.css";
import "../styles/search.css";
import "../styles/content.css";
import "../styles/form-account.css";
import "../styles/product-filter.css";
import CloseIcon from "@mui/icons-material/Close";
// const useSnackbarStyles = makeStyles()(() => ({
//   root: {
//     marginTop: 50,
//   },
// }));

export default function RootLayout({ Component, pageProps }) {
  const router = useRouter();

  //   const { classes } = useSnackbarStyles();
  const isAdminRoutes = false;
  return (
    <ReduxProvider>
      <ModeProvider>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          action={(snackbarId) => (
            <CloseIcon
              onClick={() => closeSnackbar(snackbarId)}
              style={{ cursor: "pointer" }}
              fontSize="small"
            />
          )}
          autoHideDuration={3000}
          //   classes={{
          //     containerRoot: classes.root,
          //   }}
        >
          {isAdminRoutes ? (
            <main>
              <style jsx global>{`
                html {
                  font-family: ${inter.style.fontFamily};
                }
              `}</style>
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </main>
          ) : (
            <main>
              <style jsx global>{`
                html {
                  font-family: ${inter.style.fontFamily};
                }
              `}</style>
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </main>
          )}
        </SnackbarProvider>
      </ModeProvider>
      {/* <Analytics /> */}
    </ReduxProvider>
  );
}
