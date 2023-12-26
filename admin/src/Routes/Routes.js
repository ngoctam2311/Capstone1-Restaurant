import { DefaultLayout } from "../components";
import { Home, RestaurantList, Approve, UserList, Login } from "../pages";
import NotFount from "./NotFount";

export const routes = {
    login: "/login",
    home: "/",
    restaurantList: "/restaurant-list",
    approve: "/approve",
    userList: "/user-list",
    notFount: "/*",
};

export const publicRoutes = [
    { path: routes.login, component: Login, Layout: null },
    { path: routes.notFount, component: NotFount, Layout: null },
];

export const privateRoutes = [
    { path: routes.home, component: Home },
    { path: routes.restaurantList, component: RestaurantList },
    { path: routes.approve, component: Approve },
    { path: routes.userList, component: UserList },
];
