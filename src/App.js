import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Detail, FormLogIn, FormRegister } from "./pages";
import { Header, Footer, LayoutUser } from "./components";
import { AccountUser, BookUser } from "./pages/ManageUser";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/detail"
                        element={
                            <>
                                <Header />
                                <Detail />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/bookuser"
                        element={
                            <LayoutUser>
                                <BookUser />
                            </LayoutUser>
                        }
                    />
                    <Route
                        path="/account"
                        element={
                            <LayoutUser>
                                <AccountUser />
                            </LayoutUser>
                        }
                    />
                    <Route path="/login" element={<FormLogIn />} />
                    <Route path="/register" element={<FormRegister />} />
                    <Route path="/layout" element={<LayoutUser />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
