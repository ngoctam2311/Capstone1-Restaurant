import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { DefaultLayout } from "./components/index";
import { publicRoutes } from "./Routes/Routes";

function App() {
    const dataRedux = useSelector((state) => state.user.account);

    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
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
