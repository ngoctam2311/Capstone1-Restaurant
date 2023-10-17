import "./accountUser.css";

const AccountUser = () => {
    return (
        <div className="account-user">
            <h2 className="account-heading">Thông tin của tôi</h2>
            <div className="account-manager">
                <h3 className="account-manager__heading">
                    Quản lý thông tin cá nhân của tôi
                </h3>
                <p className="account-manager__decs">
                    Thông tin liên lạc của bạn sẽ được gửi đến nhà hàng khi bạn
                    đặt chỗ.
                </p>
                <form action="">
                    <div className="account-manager__wrapp">
                        <div className="account-manager__form">
                            <label htmlFor="">Họ và tên</label>
                            <input
                                type="text"
                                className="ccount-manager__input"
                            />
                        </div>
                        <div className="account-manager__form">
                            <label htmlFor="">Địa chỉ email</label>
                            <input
                                type="text"
                                className="ccount-manager__input"
                            />
                        </div>
                    </div>
                    <div className="account-manager__wrapp">
                        <div className="account-manager__form">
                            <label htmlFor="">Số điện thoại</label>
                            <input
                                type="text"
                                className="ccount-manager__input"
                            />
                        </div>
                        <div className="account-manager__form">
                            <label htmlFor="">Ngày sinh</label>
                            <input
                                type="text"
                                className="ccount-manager__input"
                            />
                        </div>
                    </div>
                    <div className="account-manager__form">
                        <label htmlFor="">Giới tính</label>
                        <div className="account-manager__radio">
                            <div className="account-manager__sex">
                                <input
                                    type="radio"
                                    name="sex"
                                    className="manage-sex__radio"
                                    id="male"
                                />
                                <label htmlFor="male">Nam</label>
                            </div>
                            <div className="account-manager__sex">
                                <input
                                    type="radio"
                                    name="sex"
                                    className="manage-sex__radio"
                                    id="female"
                                />
                                <label htmlFor="female">Nữ</label>
                            </div>
                            <div className="account-manager__sex">
                                <input
                                    type="radio"
                                    name="sex"
                                    className="manage-sex__radio"
                                    id="no"
                                />
                                <label htmlFor="no">Không áp dụng</label>
                            </div>
                        </div>
                    </div>
                    <button className="account-manager__btn">Cập nhật</button>
                </form>
            </div>
            <div className="account-change">
                <h3 className="account-change__heading">
                    Thay đổi mật khẩu của tôi
                </h3>
                <form action="">
                    <div className="account-change__wrapp">
                        <label htmlFor="">Mật khẩu hiện tại</label>
                        <input type="text" className="account-change__input" />
                    </div>
                    <div className="account-change__wrapp">
                        <label htmlFor="">Nhập mật khẩu mới</label>
                        <input type="text" className="account-change__input" />
                    </div>
                    <button className="account-change__btn">
                        Thay đổi mật khẩu
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AccountUser;
