import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
// import { DefaultLayout, Header, SlideBar } from "./components";

import { DefaultLayout } from "./components/index";
import { publicRoutes } from "./Routes/Routes";

function App() {
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
