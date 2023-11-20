import axios from "axios";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { FaRegBell } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import "./header.css";
import { Notification, WrapperNotification } from "../index";

const Header = () => {
    // const [data, setData] = useState([]);
    // const [socket, setSocket] = useState(null);

    useEffect(() => {
    //     const  socket = io("")
    //     setSocket(socket);

    //     socket.on("dataUpdate", () => {fetchData()})
        // fetchData()

    //     return () => {
    //         socket.disconnect()
    //     }
    }, []);

    // const fetchData = async () => {
    //     await axios.get("").then((res) => setData(res.data.data))
    // }

    const handleLogout = () => {};

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
                                        <Notification />
                                        <Notification />
                                        <Notification />
                                        <Notification />
                                    </div>
                                </WrapperNotification>
                            )}
                        >
                            <div className="topbarIcons">
                                <FaRegBell className="bell" />
                                <span className="topIconBell">5</span>
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
