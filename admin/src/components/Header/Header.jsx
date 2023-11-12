import { useState } from "react";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { BsBellFill } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import "./header.css";
import { Notification, WrapperNotification } from "../index";

const Header = () => {
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
                                        className="notification-result"
                                        tabIndex="-1"
                                        {...attrs}
                                    >
                                        <Notification />
                                        <Notification />
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
                                <BsBellFill className="bell" />
                                <span className="topIconBell">5</span>
                            </div>
                        </HeadlessTippy>
                    </div>
                    <div>
                        <Tippy content="Đăng xuất" delay={150}>
                            <div className="topbarIcons">
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
