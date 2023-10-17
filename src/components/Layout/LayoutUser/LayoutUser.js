import "./layoutUser.css";
import SidebarUser from "../../SidebarUser/SidebarUser";

const Layout = ({ children }) => {
    return (
        <div className="layout-user">
            <div className="layout-user__sidebar">
                <SidebarUser />
            </div>
            <div className="layout-user__content">{children}</div>
        </div>
    );
};

export default Layout;
