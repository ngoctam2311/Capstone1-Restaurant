import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import "./header.css";
import SearchMap from "./SearchMap";
import SearchRestaurent from "./SearchRestaurent";

function Header() {
    const currentUser = false;

    return (
        <header className="wrapp-header">
            <div className="inner">
                <Link to="/" className="logo">
                    <span className="logo-first">Foodie</span>
                    <span className="logo-last">Finder</span>
                </Link>
                <div className="search">
                    <SearchMap />
                    <SearchRestaurent />
                    <button className="btn search-btn">Tìm</button>
                </div>

                <div className="account">
                    {currentUser ? (
                        <>
                            <span className="user-name">Văn Hùng</span>
                            <Tippy
                                delay={[0, 200]}
                                content="Tài khoản"
                                placement="bottom"
                            >
                                <button className="user-avatar">
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn login-btn">
                                    ĐĂNG NHẬP
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="btn register-btn">
                                    ĐĂNG KÝ
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
