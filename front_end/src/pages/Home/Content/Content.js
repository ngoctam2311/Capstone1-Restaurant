import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./content.css";
import { NextArrow, PrevArrow } from "./ContentBtn";

function Content({ data }) {
    const [details, setDetail] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:5555/api/restaurant/?page=1&limit=25`)
            .then((res) => {
                setDetail(res.data.data);
            });
    }, []);

    // Values for Slider
    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        draggable: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="content">
            <div className="content-header">
                <Link to="/restaurant-list">
                    <h2 className="content-header__heading">{data.title}</h2>
                </Link>
            </div>
            <div className="wrapp-content-restaurant">
                <Slider {...settings}>
                    {details.map((item) => (
                        <div className="content-restaurant" key={item._id}>
                            <Link
                                to={`/detail/${item._id}`}
                                className="content-restaurant__link"
                            >
                                <img
                                    src={item.image}
                                    alt="Hình ảnh món ăn"
                                    className="content-restaurant__img"
                                />
                                <div className="content-restaurant__info">
                                    <p className="content-restaurant__info-title">
                                        {item.typeOfRes}
                                    </p>
                                    <h5 className="content-restaurant__info-heading">
                                        {item.resname}
                                    </h5>
                                    <p className="content-restaurant__info-address">
                                        {item.address.street},{" "}
                                        {item.address.district},{" "}
                                        {item.address.city}
                                    </p>
                                    <p className="content-restaurant__info-price">
                                        Giá trung bình {item.averagePrice}đ
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Content;
