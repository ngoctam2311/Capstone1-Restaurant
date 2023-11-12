import { Link } from "react-router-dom";
import "./notification.css";
import { routes } from "../../Routes/Routes";

const Notification = () => {
    return (
        <Link to={routes.approve}>
            <div className="notification">
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
