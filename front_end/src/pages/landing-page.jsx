import React from "react";
import styles from "../styles/customer/home.module.css";
import Content from "../components/home/content";
import Banner from "./../images/imgBanne.jpg";
import RestaurantOwner from "../images/imgRestaurantOwners.png";
import Link from "next/link";
import Image from "next/image";
const titleAddress = [
  {
    id: 1,
    title: "Nhà hàng được chọn cho bạn",
  },
  {
    id: 2,
    title: "Nhà hàng nổi tiếng ở Hải Châu",
  },
  {
    id: 3,
    title: "Nhà hàng nổi tiếng ở Sơn Trà",
  },
];

function LandingPage() {
  return (
    <div className={`${styles["home"]}`}>
      <div className={`${styles["home-banner"]}`}>
        <Image
          src={Banner}
          //   width={'100%'}
          height={500}
          alt="Picture of the author"
        />
        <p className={`${styles["home-banner_title"]}`}>
          KHÁM PHÁ VÀ ĐẶT NHÀ HÀNG <br /> TỐT NHẤT
        </p>
      </div>

      {titleAddress.map((content) => (
        <Content key={content.id} data={content} />
      ))}

      <div className={`${styles["home-about"]}`}>
        <h2 className={`${styles["home-about__restaurant"]}`}>
          Giới thiệu về FoodieFinder
        </h2>
        <p className={`${styles["home-about__header"]}`}>
          FoodieFinder là nền tảng khám phá và đặt chỗ nhà hàng trực tuyến ở Đà
          Nẵng. Khám phá nhiều địa điểm ăn uống tốt nhất và nhiều địa điểm khác
          với sự lựa chọn vô song của chúng tôi về các nhà hàng đáp ứng bất cứ
          điều gì bạn muốn. Tìm kiếm sự sẵn có của nhà hàng bất cứ lúc nào và ở
          mức giá tốt nhất. Bạn có thể khám phá nhà hàng hoàn hảo trên
          FoodieFinder.
        </p>
        <p className={`${styles["home-about__footer"]}`}>
          Hàng ngày và trong mọi dịp, bạn có thể được hưởng mức giảm giá lên tới
          50% trên hóa đơn đồ ăn và cũng có thể kiếm được điểm thưởng gọi là
          Yums mà bạn có thể đổi tại các nhà hàng tham gia.
        </p>
      </div>

      <div className={`${styles["home-register"]}`}>
        <h2 className={`${styles["home-register__heading"]}`}>
          Bạn có phải là chủ nhà hàng?
        </h2>
        <div className={`${styles["home-register__content"]}`}>
          <Image
            src={RestaurantOwner}
            //   width={'100%'}
            // height={500}
            alt="Picture of the author"
            className={`${styles["home-register__content-img"]}`}
          />
          <div className={`${styles["home-register__content-info"]}`}>
            <h4>Đăng ký nhà hàng của bạn</h4>
            <p>
              Hãy cho chúng tôi biết thêm về bạn và chúng tôi sẽ liên hệ với bạn
              sớm nhất có thể
            </p>
            <Link href="/register">
              <button className={`${styles["btn-restaurant"]}`}>
                ĐĂNG KÝ NHÀ HÀNG CỦA TÔI
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
