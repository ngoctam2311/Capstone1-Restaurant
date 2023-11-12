import { useState } from "react";
import { PiCallBellDuotone } from "react-icons/pi";
import { AiOutlineDownCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./slidebar.css";
import { routes } from "../../Routes/Routes";

export default function Sidebaroption() {
    // eslint-disable-next-line no-unused-vars
    const [open, setOpen] = useState(false);

    return (
        <div
            className={open ? "sidebaroption open" : "sidebaroption"}
            onClick={() => setOpen(!open)}
        >
            <div className="optionicon">
                <PiCallBellDuotone className="sidebarIcon" />
                <AiOutlineDownCircle className="dropdown" />
                <p className="name-menu">Quản lý nhà hàng</p>
            </div>
            <ul className="suvnav">
                <Link to={routes.restaurantList} className="link">
                    <li className="option">
                        <span className="option-text">Danh sách nhà hàng</span>
                    </li>
                </Link>
                <Link to={routes.approve} className="link">
                    <li className="option">
                        <span className="option-text">Phê duyệt</span>
                    </li>
                </Link>
            </ul>
        </div>
    );
}
