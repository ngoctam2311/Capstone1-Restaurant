import { useState, useEffect } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faCircle,
    faLocationDot,
    faMoneyBill1,
    faUser,
    faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import "./detail.css";
import FormOrder from "./FormOrder/FormOrder";
import Banner from "../../images/imgBanne.jpg";
import Content from "../Home/Content/Content";
import DetailReview from "./DetailReview/DetailReview";
import { settings } from "./DetailBtn";

function Detail() {
    const menuData = {
        menuTitle: [
            {
                id: 1,
                title: "Món ăn phụ",
                menuName: [
                    {
                        id: 1,
                        name: "Bánh mì bơ tỏi",
                        price: "45.000đ",
                    },
                    {
                        id: 2,
                        name: "Rau xào thịt bò",
                        price: "80.000đ",
                    },
                    {
                        id: 3,
                        name: "Khoai tây nghiền",
                        price: "85.000đ",
                    },
                    {
                        id: 4,
                        name: "Cơm",
                        price: "25.000đ",
                    },
                ],
            },
            {
                id: 2,
                title: "Món hầm",
                menuName: [
                    {
                        id: 1,
                        name: "Chả cá thác lác nấu khổ qua",
                        price: "155.000đ",
                    },
                    {
                        id: 2,
                        name: "Bắp bò hầm tiêu xanh",
                        price: "295.000đ",
                    },
                    {
                        id: 3,
                        name: "Đuôi bò hầm bia",
                        price: "255.000đ",
                    },
                    {
                        id: 4,
                        name: "Canh gà hầm củ cải trắng",
                        price: "220.000đ",
                    },
                ],
            },
            {
                id: 3,
                title: "Món thịt",
                menuName: [
                    {
                        id: 1,
                        name: "Ức vịt sốt quả mâm xôi đen",
                        price: "165.000đ",
                    },
                    {
                        id: 2,
                        name: "Móng giò heo chiên giòn - kim chi",
                        price: "225.000đ",
                    },
                    {
                        id: 3,
                        name: "Gân bò hầm sốt Thái",
                        price: "190.000đ",
                    },
                    {
                        id: 4,
                        name: "Chân ếch chiên sốt Thái",
                        price: "150.000đ",
                    },
                ],
            },
        ],
    };

    const [contents, setContents] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/titleAddress`)
            .then((res) => res.json())
            .then((res) => setContents(res));
    }, []);

    return (
        <div className="detail">
            <div className="detail-banner">
                <Slider {...settings}>
                    <img className="detail-banner__img" src={Banner} alt="" />
                    <img
                        className="detail-banner__img"
                        src="https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg"
                        alt=""
                    />
                    <img className="detail-banner__img" src={Banner} alt="" />
                    <img
                        className="detail-banner__img"
                        src="https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg"
                        alt=""
                    />
                    <img className="detail-banner__img" src={Banner} alt="" />
                    <img
                        className="detail-banner__img"
                        src="https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg"
                        alt=""
                    />
                    <img className="detail-banner__img" src={Banner} alt="" />
                    <img
                        className="detail-banner__img"
                        src="https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg"
                        alt=""
                    />
                    <img className="detail-banner__img" src={Banner} alt="" />
                    <img
                        className="detail-banner__img"
                        src="https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg"
                        alt=""
                    />
                    <img className="detail-banner__img" src={Banner} alt="" />
                    <img
                        className="detail-banner__img"
                        src="https://citytourdanang.com/wp-content/uploads/2017/06/nguon-goc-my-quang-citytourdanang.jpg"
                        alt=""
                    />
                </Slider>
            </div>

            <div className="wrapper-detail">
                <div className="detail-content">
                    <div className="detail-content__menu">
                        {/* ----- Start header menu ---- */}
                        <div className="detail-content__header">
                            <h2 className="detail-content__name">Mì Quảng</h2>
                            <div className="detail-content__info">
                                <div className="detail-content__icon">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <h4 className="detail-content__address">
                                    Hải Châu, Đà Nẵng
                                </h4>
                            </div>
                            <div className="detail-content__info">
                                <div className="detail-content__icon">
                                    <FontAwesomeIcon icon={faUtensils} />
                                </div>
                                <p className="detail-content__country">
                                    Việt Nam
                                </p>
                            </div>
                            <div className="detail-content__info">
                                <div className="detail-content__icon">
                                    <FontAwesomeIcon icon={faMoneyBill1} />
                                </div>
                                <p className="detail-content__price">
                                    Giá trung bình 80.000đ
                                </p>
                            </div>
                            <div className="detail-open">
                                <h4 className="detail-open__heading">
                                    Thời gian mở cửa
                                </h4>
                                <div className="detail-open__wrap">
                                    <div className="detail-open__week">
                                        <p>Thứ hai</p>
                                        <p>Thứ ba</p>
                                        <p>Thứ bốn</p>
                                        <p>Thứ năm</p>
                                        <p>Thứ sáu</p>
                                        <p>Thứ bảy</p>
                                        <p>Chủ nhật</p>
                                    </div>
                                    <div className="detail-open__time">
                                        <span>11:00 Giờ - 23:00 Giờ</span>
                                        <span>11:00 Giờ - 23:00 Giờ</span>
                                        <span>11:00 Giờ - 23:00 Giờ</span>
                                        <span>11:00 Giờ - 23:00 Giờ</span>
                                        <span>11:00 Giờ - 23:00 Giờ</span>
                                        <span>11:00 Giờ - 23:00 Giờ</span>
                                        <span>11:00 Giờ - 23:00 Giờ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ----- End header menu ---- */}

                        {/* ----- Start restaurant menu ----- */}
                        <div className="detail-menu">
                            <h2 className="detail-menu__heading">
                                Menu nhà hàng
                            </h2>
                            {menuData.menuTitle.map((item) => (
                                <div
                                    className="detail-menu__list"
                                    key={item.id}
                                >
                                    <h4 className="detail-menu__title">
                                        {item.title}
                                    </h4>
                                    {item.menuName.map((i) => (
                                        <div
                                            className="detail-menu__item"
                                            key={i.id}
                                        >
                                            <p className="detail-menu__name">
                                                {i.name}
                                            </p>
                                            <span className="detail-menu__price">
                                                {i.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <button className="detail-menu__btn">
                                Xem Thêm Menu
                            </button>
                        </div>
                        {/* ----- End restaurant menu ----- */}

                        {/* ----- Start Review restaurant ----- */}
                        <div className="detail-review">
                            <h2 className="detail-review__heading">Đánh giá</h2>
                            <div className="detail-review__wrap">
                                <DetailReview />
                            </div>
                        </div>
                        {/* ----- End Review restaurant ----- */}

                        {/* ----- Start Comment restaurant ----- */}
                        <div className="detail-comment">
                            <h4 className="comment-heading">
                                Thực khách nói gì về nhà hàng này:
                            </h4>
                            <div className="detail-comment__wrapp">
                                <div className="wrapp-comment">
                                    <div className="wrapp-comment__avatar">
                                        <FontAwesomeIcon
                                            className="wrapp-comment__icon"
                                            icon={faUser}
                                        />
                                    </div>
                                    <div>
                                        <div className="comment-user">
                                            <h4 className="comment-user__name">
                                                Văn Hùng
                                            </h4>
                                            <FontAwesomeIcon
                                                className="comment-user__icon"
                                                icon={faCircle}
                                            />
                                            <span className="comment-user__review">
                                                1 Đánh giá
                                            </span>
                                        </div>
                                        <span className="wrapp-comment__time">
                                            Ngày 12 Tháng 10 Năm 2023
                                        </span>
                                    </div>
                                </div>
                                <p className="comment-content">
                                    Thức ăn thật tuyệt vời
                                </p>
                            </div>
                            <div className="detail-comment__wrapp">
                                <div className="wrapp-comment">
                                    <div className="wrapp-comment__avatar">
                                        <FontAwesomeIcon
                                            className="wrapp-comment__icon"
                                            icon={faUser}
                                        />
                                    </div>
                                    <div className="wrapp-comment-user">
                                        <div className="comment-user">
                                            <h4 className="comment-user__name">
                                                Văn Hùng
                                            </h4>
                                            <FontAwesomeIcon
                                                className="comment-user__icon"
                                                icon={faCircle}
                                            />
                                            <span className="comment-user__review">
                                                1 Đánh giá
                                            </span>
                                        </div>
                                        <span className="wrapp-comment__time">
                                            Ngày 12 Tháng 10 Năm 2023
                                        </span>
                                    </div>
                                </div>
                                <p className="comment-content">
                                    Thức ăn thật tuyệt vời
                                </p>
                            </div>
                            <FontAwesomeIcon
                                className="detail-comment__icon"
                                icon={faChevronDown}
                            />
                        </div>
                        {/* ----- End Comment restaurant ----- */}
                    </div>
                    {/* ---- Start Form Book restaurant ---- */}
                    <div className="detail-form__order">
                        <FormOrder />
                    </div>
                    {/* ---- End Form Book restaurant ---- */}
                </div>
            </div>
            <div className="detail-content__home">
                {contents.map((content) => (
                    <Content key={content.id} data={content} />
                ))}
            </div>
        </div>
    );
}

export default Detail;
