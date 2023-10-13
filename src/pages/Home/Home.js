import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Content from "./Content/Content";
import Banner from "../../images/imgBanne.jpg";
import RestaurantOwner from "../../images/imgRestaurantOwners.png";

function Home() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/titleAddress`)
            .then((res) => res.json())
            .then((res) => setContents(res));
    }, []);

    return (
        <div className="home">
            <div className="home-banner">
                <img
                    src={Banner}
                    alt="Ảnh Giới Thiệu"
                    className="home-banner_img"
                />
                <p className="home-banner_title">
                    KHÁM PHÁ VÀ ĐẶT NHÀ HÀNG <br /> TỐT NHẤT
                </p>
            </div>

            {contents.map((content) => (
                <Content key={content.id} data={content} />
            ))}

            <div className="home-about">
                <h2 className="home-about__restaurant">
                    Giới thiệu về FoodieFinder
                </h2>
                <p className="home-about__header">
                    FoodieFinder là nền tảng khám phá và đặt chỗ nhà hàng trực
                    tuyến ở Đà Nẵng. Khám phá nhiều địa điểm ăn uống tốt nhất và
                    nhiều địa điểm khác với sự lựa chọn vô song của chúng tôi về
                    các nhà hàng đáp ứng bất cứ điều gì bạn muốn. Tìm kiếm sự
                    sẵn có của nhà hàng bất cứ lúc nào và ở mức giá tốt nhất.
                    Bạn có thể khám phá nhà hàng hoàn hảo trên FoodieFinder.
                </p>
                <p className="home-about__footer">
                    Hàng ngày và trong mọi dịp, bạn có thể được hưởng mức giảm
                    giá lên tới 50% trên hóa đơn đồ ăn và cũng có thể kiếm được
                    điểm thưởng gọi là Yums mà bạn có thể đổi tại các nhà hàng
                    tham gia.
                </p>
            </div>

            <div className="home-register">
                <h2 className="home-register__heading">
                    Bạn có phải là chủ nhà hàng?
                </h2>
                <div className="home-register__content">
                    <img
                        src={RestaurantOwner}
                        alt=""
                        className="home-register__content-img"
                    />
                    <div className="home-register__content-info">
                        <h4>Đăng ký nhà hàng của bạn</h4>
                        <p>
                            Hãy cho chúng tôi biết thêm về bạn và chúng tôi sẽ
                            liên hệ với bạn sớm nhất có thể
                        </p>
                        <Link to="/register">
                            <button className="btn-restaurant">
                                ĐĂNG KÝ NHÀ HÀNG CỦA TÔI
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
