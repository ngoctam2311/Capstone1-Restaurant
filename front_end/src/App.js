import { Fragment, useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes/Routes";
import { DefaultLayout } from "./components/Layout/";
import { UserContext } from "./Hooks/UserContext";

function App() {
    const { user, loginContext } = useContext(UserContext);
    console.log("user", user);

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
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
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
