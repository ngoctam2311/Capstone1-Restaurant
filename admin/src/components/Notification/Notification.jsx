import axios from "axios";
import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect, useContext } from "react";
import "./notification.css";
import { routes } from "../../Routes/Routes";
import { UserContext } from "../../hook/UserContext";
import Userimg from "../../img/user.jpg"

const Notification = () => {
    const [activeColor, setActiveColor] = useState(false);
    const [data, setData] = useState([]);
    const ref = useRef();

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
                .get(`http://localhost:3000/api/booking/pending`, option)
                .then((res) => {
                    setData(res.data.data);
                });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleClick = () => {
        setActiveColor(true);
    };

    return (
        <>
            {data.length === 0 ? (
                <p className="notRestaurantApprove">
                    không có nhà hàng cần phê duyệt
                </p>
            ) : (
                data.map((item, index) => (
                    <Link to={routes.approve} ref={ref} key={index}>
                        <div
                            className={`notification ${
                                activeColor ? "active" : ""
                            }`}
                            onClick={handleClick}
                        >
                            <img
                                className="notification__img"
                                src={Userimg}
                                alt=""
                            />
                            <div className="notification__info">
                                <span className="notification__resname">
                                    {item.customerName}
                                </span>
                                <span className="notification__dec">
                                    {item.status}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </>
    );
};

export default Notification;
