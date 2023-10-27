import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import "./header.css";
import SearchMap from "./SearchMap";
import SearchRestaurent from "./SearchRestaurent";
import { UserContext } from "../../Hooks/UserContext";

function Header() {
    const { user } = useContext(UserContext);

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
                </div>

                <div className="account">
                    {!!user && !!user.auth === false ? (
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
                    ) : (
                        <>
                            <span className="user-name">Văn Hùng</span>
                            <Tippy
                                delay={[0, 200]}
                                content="Tài khoản"
                                placement="bottom"
                            >
                                <Link to="/account-manager">
                                    <button className="user-avatar">
                                        <FontAwesomeIcon icon={faUser} />
                                    </button>
                                </Link>
                            </Tippy>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
