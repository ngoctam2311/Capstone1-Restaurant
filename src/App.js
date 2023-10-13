import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Detail, FormLogIn, FormRegister } from "./pages";
import { Header, Footer } from "./components";

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
                    <Route path="/login" element={<FormLogIn />} />
                    <Route path="/register" element={<FormRegister />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
