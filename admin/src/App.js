import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, useContext, useEffect } from "react";
// import { useSelector } from "react-redux";
import { DefaultLayout } from "./components/index";
import { publicRoutes, privateRoutes } from "./Routes/Routes";
import { Login } from "./pages";
import { UserContext } from "./hook/UserContext";

function App() {
    // const dataRedux = useSelector((state) => state.user.account);
    // console.log(dataRedux);

    const { user, loginContext } = useContext(UserContext);
    console.log("user", user.auth);

    useEffect(() => {
        if (localStorage.getItem("login")) {
            loginContext(
                localStorage.getItem("email"),
                localStorage.getItem("login")
            );
        }
    }, []);

    return (
        <Router>
            <Routes>
                {user && !user.auth
                    ? publicRoutes.map((route, index) => {
                          return (
                              <Route
                                  key={index}
                                  path={route.path}
                                  element={<Login />}
                              />
                          );
                      })
                    : privateRoutes.map((route, index) => {
                          const Page = route.component;
                          let Layout = DefaultLayout;

                          if (route.Layout) {
                              Layout = route.Layout;
                          } else if (route.Layout === null) {
                              Layout = Fragment;
                          }

                          return (
                              <Route
                                  key={index}
                                  path={route.path}
                                  element={
                                      <Layout>
                                          <Page />
                                      </Layout>
                                  }
                              />
                          );
                      })}
            </Routes>
        </Router>
    );
}

export default App;
