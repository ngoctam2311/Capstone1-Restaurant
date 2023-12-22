import axios from "axios";
import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
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

    // useEffect(() => {
    //     const  socket = io("")
    //     setSocket(socket);

    //     socket.on("dataUpdate", () => {fetchData()})
    // fetchData()

    //     return () => {
    //         socket.disconnect()
    //     }
    // }, []);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            await axios.get("http://localhost:3000/api/pending").then((res) => {
                setData(res.data.data.result);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

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
