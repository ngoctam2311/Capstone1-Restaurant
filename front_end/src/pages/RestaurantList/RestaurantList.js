import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import { routes } from "../../Routes/Routes";
import "./restaurantList.css";
import { useParams } from "react-router-dom";

const RestaurantList = () => {
    const discount = false;
    // console.log(item);
    const { searchValue } = useParams();
    console.log(searchValue);
    const [details, setDetail] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const totalPages = 30;

    useEffect(() => {
        axios
            .get(
                `http://localhost:5555/api/restaurant/search?search=${encodeURIComponent(
                    searchValue
                )}&page=${totalPage}&limit=10`
            )
            .then((res) => {
                console.log(res.data);
                setDetail(res.data.data);
            });
    }, [totalPage]);

    const handlePageClick = (event) => {
        setTotalPage(+event.selected + 1);
    };
    const item = "";

    return (
        <div className="restaurant-list">
            {/* <div className="restaurant-list__heading">
                <Link to={routes.home} className="list-heading__link">
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
                <FontAwesomeIcon icon={faChevronRight} /> */}
            {/* <h3 className="list-heading__titile">
                    Nhà hàng tốt nhất Hải Châu
                </h3> */}
            {/* </div> */}
            {details.map((item) => (
                <Link
                    to={`/detail/${item._id}`}
                    key={item._id}
                    className="restaurant-list__content"
                >
                    <img
                        className="list-content__img"
                        src={item.image}
                        alt=""
                    />
                    <div className="list-content__wrapp">
                        <div className="list-content__left">
                            <h3 className="list-content__heading">
                                {item.resname}
                            </h3>
                            <p className="list-content__address">
                                {item.address.street}, {item.address.district},{" "}
                                {item.address.city}
                            </p>
                            <p className="list-content__price">
                                Giá trung bình {item.averagePrice}đ
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
            ))}
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
                renderOnZeroPageCount={null}
                // forcePage={forcePageActive}
            />
        </div>
    );
};

export default RestaurantList;
