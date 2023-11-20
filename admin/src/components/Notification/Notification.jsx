import { Link } from "react-router-dom";
import "./notification.css";
import { routes } from "../../Routes/Routes";
import React,{ useRef, useState } from "react";

const Notification = () => {
    const [activeColor, setActiveColor] = useState(false);
    const ref = useRef()

    const handleClick = () => {
        setActiveColor(true);
    };

    return (
        <Link to={routes.approve} ref={ref}>
            <div className={`notification ${activeColor ? "active" : ""}`} onClick={handleClick}>
                <img
                    className="notification__img"
                    src="https://cf.shopee.vn/file/9a34f98ebcc17429b246173d3fa6c229_tn"
                    alt=""
                />
                <div className="notification__info">
                    <span className="notification__resname">bún </span>
                    <span className="notification__dec">cần phê duyệt</span>
                </div>
            </div>
        </Link>
    );
};

export default Notification;
