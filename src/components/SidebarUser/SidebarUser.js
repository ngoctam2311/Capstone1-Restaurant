import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faArrowRightFromBracket,
    faUser,
    faBookOpen,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "./sidebarUser.css";
import { routes } from "../../Routes/Routes";
import Menu, { MenuItem } from "./Menu";

const SidebarUser = () => {
    return (
        <div className="wrap-sidebar">
            <aside className="sidebar">
                <div className="sidebar-avatar">
                    <div className="sidebar-icon">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span className="sidebar-name">Văn Hùng</span>
                </div>
                <Menu>
                    <MenuItem to={routes.home} title="Trang chủ">
                        <FontAwesomeIcon icon={faHouse} />
                    </MenuItem>
                    <MenuItem
                        to={routes.accountuser}
                        title="Thông tin cá nhân của tôi"
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </MenuItem>
                    <MenuItem to={routes.bookuser} title="Đặt bàn của tôi">
                        <FontAwesomeIcon icon={faBookOpen} />
                    </MenuItem>
                    <MenuItem to={routes.commentUser} title="Đánh giá của tôi">
                        <FontAwesomeIcon icon={faComment} />
                    </MenuItem>
                    <MenuItem to={routes.home} title="Đăng xuất">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </MenuItem>
                </Menu>
            </aside>
        </div>
    );
};

export default SidebarUser;
