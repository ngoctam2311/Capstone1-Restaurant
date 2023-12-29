import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { io } from "socket.io-client";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { FaRegBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import "./header.css";
import { Notification, WrapperNotification } from "../index";
import { UserContext } from "../../hook/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const { user } = useContext(UserContext);
    const option = {
        headers: {
            "Content-Type":
                "application/x-www-form-urlencoded;application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user.auth}`,
        },
    };

    const fetchData = async () => {
        try {
            await axios
                .get(`http://localhost:3000/api/restaurant/pending`, option)
                .then((res) => {
                    setData(res.data.data);
                });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="text-wrapper1">Rest</span>
                    <span className="text-wrapper2">aurant</span>
                </div>
                <h2 className="topbar__heading">Quản trị viên website</h2>
                <div className="topRight">
                    <div>
                        <HeadlessTippy
                            content="Thông báo"
                            delay={150}
                            interactive
                            hideOnClick
                            trigger="click"
                            render={(attrs) => (
                                <WrapperNotification>
                                    <div
                                        id="headlessTippy"
                                        tabIndex="-1"
                                        {...attrs}
                                    >
                                        <Notification />
                                    </div>
                                </WrapperNotification>
                            )}
                        >
                            <div className="topbarIcons">
                                <FaRegBell className="bell" />
                                <span
                                    className={
                                        data.length === 0
                                            ? "topIconBellHidden"
                                            : "topIconBell"
                                    }
                                >
                                    {data.length}
                                </span>
                            </div>
                        </HeadlessTippy>
                    </div>
                    <div>
                        <Tippy content="Đăng xuất" delay={150}>
                            <div className="topbarIcons" onClick={handleLogout}>
                                <TbLogout className="logout" />
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
