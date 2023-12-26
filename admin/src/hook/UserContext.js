import React from "react";

const UserContext = React.createContext({ email: "", auth: false });

const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ email: "", auth: false });

    const loginContext = (email, data) => {
        setUser((user) => ({
            email: email,
            auth: true,
        }));
        localStorage.setItem("email", email);
        localStorage.setItem("login", data);
    };

    const logout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("login");
        alert("Đã đăng xuất");

        setUser((user) => ({
            email: "",
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
