import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./content.css";
import { NextArrow, PrevArrow } from "./ContentBtn";

function Content({ data }) {
    // Fake data to display on the interface
    const contentData = {
        content: [
            {
                id: 1,
                image: "https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg",
                foodName: "Mì Quảng",
                restaurantAddress: "Hải Châu",
                averagePrice: "50.000",
            },
            {
                id: 2,
                image: "https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg",
                foodName: "Mì Quảng",
                restaurantAddress: "Hải Châu",
                averagePrice: "50.000",
            },
            {
                id: 3,
                image: "https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg",
                foodName: "Mì Quảng",
                restaurantAddress: "Hải Châu",
                averagePrice: "50.000",
            },
            {
                id: 4,
                image: "https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg",
                foodName: "Mì Quảng",
                restaurantAddress: "Hải Châu",
                averagePrice: "50.000",
            },
            {
                id: 5,
                image: "https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg",
                foodName: "Mì Quảng",
                restaurantAddress: "Hải Châu",
                averagePrice: "50.000",
            },
            {
                id: 6,
                image: "https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg",
                foodName: "Mì Quảng",
                restaurantAddress: "Hải Châu",
                averagePrice: "50.000",
            },
            {
                id: 7,
                image: "https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg",
                foodName: "Mì Quảng",
                restaurantAddress: "Hải Châu",
                averagePrice: "50.000",
            },
            {
                id: 8,
                image: "https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg",
                foodName: "Mì Quảng",
                restaurantAddress: "Hải Châu",
                averagePrice: "50.000",
            },
            {
                id: 9,
                image: "https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg",
                foodName: "Mì Quảng",
                restaurantAddress: "Hải Châu",
                averagePrice: "50.000",
            },
            {
                id: 10,
                image: "https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg",
                foodName: "Mì Quảng",
                restaurantAddress: "Hải Châu",
                averagePrice: "50.000",
            },
        ],
    };

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
                <Link to="">
                    <h2 className="content-header__heading">{data.title}</h2>
                </Link>
            </div>
            <div className="wrapp-content-restaurant">
                <Slider {...settings}>
                    {contentData.content.map((item) => (
                        <div className="content-restaurant" key={item.id}>
                            <Link
                                to="/detail"
                                className="content-restaurant__link"
                            >
                                <img
                                    src={item.image}
                                    alt="Hình ảnh món ăn"
                                    className="content-restaurant__img"
                                />
                                <div className="content-restaurant__info">
                                    <h5 className="content-restaurant__info-heading">
                                        {item.foodName}
                                    </h5>
                                    <p className="content-restaurant__info-address">
                                        {item.restaurantAddress}
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
