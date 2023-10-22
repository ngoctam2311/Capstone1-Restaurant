import "./bookUser.css";

const BookUser = () => {
    const bookUser = true;

    return (
        <div className="book-user">
            <h2 className="book-heading">Đặt bàn của tôi</h2>
            <div className="wrapp-book">
                {bookUser ? (
                    <div className="book-manager">
                        <h3 className="book-manager__heading">Tên nhà hàng</h3>
                        <div className="book-manager__wrapp">
                            <span className="book-manager__date">
                                Ngày: 10/15/2023
                            </span>
                            <span className="book-manager__date">
                                Thời gian: 11:00
                            </span>
                            <span className="book-manager__date">
                                số người: 4
                            </span>
                        </div>
                        <button className="book-manager__btn">Hủy</button>
                    </div>
                ) : (
                    <p className="no-book">Chưa có chỗ đặt bàn nào</p>
                )}
            </div>
        </div>
    );
};

export default BookUser;
