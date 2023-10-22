import {
    Home,
    Detail,
    FormLogIn,
    FormRegister,
    RestaurantList,
} from "../pages";
import { AccountUser, BookUser, CommentUser } from "../pages/ManageUser";
import { LayoutUser } from "../components/Layout";

export const routes = {
    home: "/",
    detail: "/detail/:id",
    login: "/login",
    register: "/register",
    restaurantList: "/restaurant-list",
    layoutAccount: "/account",
    accountuser: "/account-manager",
    bookuser: "/bookuser",
    commentUser: "/commentUser",
};

// Public routes
export const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.detail, component: Detail },
    { path: routes.restaurantList, component: RestaurantList },
    { path: routes.login, component: FormLogIn, layout: null },
    { path: routes.register, component: FormRegister, layout: null },
    { path: routes.layoutAccount, component: LayoutUser, layout: LayoutUser },
    { path: routes.accountuser, component: AccountUser, layout: LayoutUser },
    { path: routes.bookuser, component: BookUser, layout: LayoutUser },
    { path: routes.commentUser, component: CommentUser, layout: LayoutUser },
];
