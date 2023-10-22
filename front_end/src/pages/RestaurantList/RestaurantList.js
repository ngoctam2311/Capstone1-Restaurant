import { Link } from "react-router-dom";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./restaurantList.css";

const RestaurantList = () => {
    const discount = true;

    return (
        <div className="restaurant-list">
            <div className="restaurant-list__heading">
                <Link to="/" className="list-heading__link">
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
                <FontAwesomeIcon icon={faChevronRight} />
                <h3 className="list-heading__titile">
                    Nhà hàng tốt nhất Hải Châu
                </h3>
            </div>
            <Link to="/detail" className="restaurant-list__content">
                <img
                    className="list-content__img"
                    src="https://lavenderstudio.com.vn/wp-content/uploads/2017/08/chup-hinh-nha-hang-khach-san-3.png"
                    alt=""
                />
                <div className="list-content__wrapp">
                    <div className="list-content__left">
                        <h3 className="list-content__heading">Tên nhà hàng</h3>
                        <p className="list-content__address">
                            Hải Châu, Đà Nẵng
                        </p>
                        <p className="list-content__price">
                            Giá trung bình 50.00đ
                        </p>
                        {discount && (
                            <span className="list-content__discount">
                                Giảm 20% thực đơn gọi món
                            </span>
                        )}
                    </div>
                    <div className="list-content__right">
                        <p className="list-content__point">8.8</p>
                        <p className="list-content__review">
                            <FontAwesomeIcon icon={faComment} /> 1,271
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RestaurantList;
