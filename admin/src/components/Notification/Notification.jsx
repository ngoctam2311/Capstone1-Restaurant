import axios from "axios";
import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import "./notification.css";
import { routes } from "../../Routes/Routes";

const Notification = () => {
    const [activeColor, setActiveColor] = useState(false);
    const [data, setData] = useState([]);
    const ref = useRef();

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

    const handleClick = () => {
        setActiveColor(true);
    };

    return (
        <>
            {data.length === 0 ? (
                <p className="notRestaurantApprove">không có nhà hàng cần phê duyệt</p>
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
                                src={item.image}
                                alt=""
                            />
                            <div className="notification__info">
                                <span className="notification__resname">
                                    {item.resname}
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
