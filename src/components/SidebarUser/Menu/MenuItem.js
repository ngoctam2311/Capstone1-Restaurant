import { NavLink } from "react-router-dom";
import "./menu.css";

const MenuItem = ({ to, children, title }) => {
    return (
        <NavLink className="sidebar-menu__item" to={to}>
            <span className="sidebar-menu__icon">{children}</span>
            <span className="sidebar-menu__title">{title}</span>
        </NavLink>
    );
};

export default MenuItem;
