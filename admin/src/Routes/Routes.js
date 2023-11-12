import { Home, RestaurantList, Approve, UserList } from "../pages";
import NotFount from "./NotFount";

export const routes = {
    home: "/",
    restaurantList: "/restaurant-list",
    approve: "/approve",
    userList: "/user-list",
    notFount: "/*",
};

export const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.restaurantList, component: RestaurantList },
    { path: routes.approve, component: Approve },
    { path: routes.userList, component: UserList },
    { path: routes.notFount, component: NotFount, Layout: null },
];
