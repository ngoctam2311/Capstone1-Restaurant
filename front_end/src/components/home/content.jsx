"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/customer/content.module.css";
import { NextArrow, PrevArrow } from "./ContentBtn";
import { useSnackbar } from "notistack";
import { getRestaurantsWithQuery } from "../../apis/home";

function Content({ data }) {
  const { enqueueSnackbar } = useSnackbar();
  const [details, setDetail] = useState([]);
  async function getRestaurants() {
    try {
        const res = await getRestaurantsWithQuery(1, 25);
        setDetail(res.data);
        console.log(res)
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Đã có lỗi xảy ra, vui lòng thử lại sau!!", {
        variant: "error",
      });
    }
  }
  useEffect(() => {
    getRestaurants()
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
    <div className={`${styles["content"]}`}>
      <div className={`${styles["content-header"]}`}>
        <Link href="/restaurant-list">
          <h2 className={`${styles["content-header__heading"]}`}>
            {data.title}
          </h2>
        </Link>
      </div>
      <div className={`${styles["wrapp-content-restaurant"]}`}>
        <Slider {...settings}>
          {details.map((item) => (
            <div className={`${styles["content-restaurant"]}`} key={item._id}>
              <Link
                href={`/detail/${item._id}`}
                className={`${styles["content-restaurant__link"]}`}
              >
                <img
                  src={item.image}
                  alt="Hình ảnh món ăn"
                  className={`${styles["content-restaurant__img"]}`}
                />
                <div className={`${styles["content-restaurant__info"]}`}>
                  <p className={`${styles["content-restaurant__info-title"]}`}>
                    {item.typeOfRes}
                  </p>
                  <h5
                    className={`${styles["content-restaurant__info-heading"]}`}
                  >
                    {item.resname}
                  </h5>
                  <p
                    className={`${styles["content-restaurant__info-address"]}`}
                  >
                    {item.address.street}, {item.address.district},{" "}
                    {item.address.city}
                  </p>
                  <p className={`${styles["content-restaurant__info-price"]}`}>
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
