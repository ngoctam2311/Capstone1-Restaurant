import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./components/index";
// import store from "./redux/store";
import { UserProvider } from "./hook/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        {/* <Provider store={store}> */}
        <React.StrictMode>
            <GlobalStyle>
                <App />
            </GlobalStyle>
        </React.StrictMode>
        {/* </Provider> */}
    </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
