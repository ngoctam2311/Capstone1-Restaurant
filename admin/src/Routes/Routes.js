import { DefaultLayout } from "../components";
import { Home, Profile, Approve, Createprofile, Login, Register } from "../pages";
import NotFount from "./NotFount";

export const routes = {
    login: "/login",
    home: "/",
    create: "/create",
    notFount: "/*",
    register: "/register",
    list: "/reslist",
    profile: "/profile"
};

export const publicRoutes = [
    { path: routes.login, component: Login, Layout: null },
    { path: routes.notFount, component: NotFount, Layout: null },
    { path: routes.register, component:Register, Layout:null}
];

export const privateRoutes = [
    { path: routes.home, component: Home },
    { path: routes.profile, component: Profile },
    { path: routes.list, component: Approve },
    { path: routes.create, component: Createprofile },
];
