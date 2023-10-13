import "./detailReview.css";

function DetailReview() {
    return (
        <div className="review">
            <div className="review-left">
                <div className="review-left__circle">
                    <div className="left-circle__point">
                        <span className="left-circle__point-left">9</span>
                        <span className="left-circle__point-right">/10</span>
                    </div>
                    <div className="left-circle__quality">
                        <p className="left-circle__title">Xuất sắc</p>
                        <span className="left-circle__review">
                            232 Đánh giá
                        </span>
                    </div>
                </div>
                <div className="review-left__wrapp">
                    <div>
                        <div className="review-left__wrapp-point">
                            <span className="left-circle__point-left">9</span>
                            <span className="left-circle__point-right">
                                /10
                            </span>
                        </div>
                        <p className="review-left__wrapp-desc">Thức ăn</p>
                    </div>
                    <div className="border-service">
                        <div className="review-left__wrapp-point ">
                            <span className="left-circle__point-left">9</span>
                            <span className="left-circle__point-right">
                                /10
                            </span>
                        </div>
                        <p className="review-left__wrapp-desc">Dịch vụ</p>
                    </div>
                    <div>
                        <div className="review-left__wrapp-point">
                            <span className="left-circle__point-left">9</span>
                            <span className="left-circle__point-right">
                                /10
                            </span>
                        </div>
                        <p className="review-left__wrapp-desc">
                            Môi trường nhà hàng
                        </p>
                    </div>
                </div>
            </div>
            <div className="review-right">
                <div className="review-right__wrapp">
                    <p className="review-right__point">9-10</p>
                    <div className="review-right__horizontal"></div>
                </div>
                <div className="review-right__wrapp">
                    <p className="review-right__point">7-8</p>
                    <div className="review-right__horizontal"></div>
                </div>
                <div className="review-right__wrapp">
                    <p className="review-right__point">5-6</p>
                    <div className="review-right__horizontal"></div>
                </div>
                <div className="review-right__wrapp">
                    <p className="review-right__point">3-4</p>
                    <div className="review-right__horizontal"></div>
                </div>
                <div className="review-right__wrapp">
                    <p className="review-right__point">1-2</p>
                    <div className="review-right__horizontal"></div>
                </div>
            </div>
        </div>
    );
}

export default DetailReview;
