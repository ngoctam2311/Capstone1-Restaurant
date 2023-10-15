import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faArrowRightFromBracket,
    faUser,
    faBookOpen,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./sidebarUser.css";

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
                <div>
                    <Link to="/">
                        <button className="sidebar-btn">
                            <FontAwesomeIcon
                                className="sidebar-btn__icon"
                                icon={faHouse}
                            />
                            <span className="sidebar-title">Trang chủ</span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/account">
                        <button className="sidebar-btn">
                            <FontAwesomeIcon
                                className="sidebar-btn__icon"
                                icon={faUser}
                            />
                            <span className="sidebar-title">
                                Thông tin cá nhân của tôi
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/bookuser">
                        <button className="sidebar-btn">
                            <FontAwesomeIcon
                                className="sidebar-btn__icon"
                                icon={faBookOpen}
                            />
                            <span className="sidebar-title">
                                Đặt bàn của tôi
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link>
                        <button className="sidebar-btn">
                            <FontAwesomeIcon
                                className="sidebar-btn__icon"
                                icon={faComment}
                            />
                            <span className="sidebar-title">
                                Đánh giá của tôi
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <Link>
                        <button className="sidebar-btn">
                            <FontAwesomeIcon
                                className="sidebar-btn__icon"
                                icon={faArrowRightFromBracket}
                            />
                            <span className="sidebar-title">Đăng xuất</span>
                        </button>
                    </Link>
                </div>
            </aside>
        </div>
    );
};

export default SidebarUser;
