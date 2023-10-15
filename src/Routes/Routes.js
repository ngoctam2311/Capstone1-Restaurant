import { Home, Detail, FormLogIn, FormRegister } from "../pages";
import { LayoutUser } from "./components";

const routes = {
    home: "/",
    detail: "/detail",
    login: "/login",
    register: "/register",
    layout: "/layout",
    account: "/account",
    bookuser: "/bookuser",
};

// Public routes
export const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.detail, component: Detail },
    { path: routes.login, component: FormLogIn },
    { path: routes.register, component: FormRegister },
    { path: routes.layout, component: LayoutUser },
];
