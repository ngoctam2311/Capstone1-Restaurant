import { useState } from "react";
import "./formAccount.css";
import { isAccountValue, isEmailValid } from "./index.js";
import ImageAccount from "../../images/imgAccount.png";

// Consider user values for fields
const initRegisterValue = {
    userName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    userRegister: "",
};

function FormRegister() {
    const [registerValue, setRegisterValue] = useState(initRegisterValue);
    const [registerError, setRegisterError] = useState({});

    // error checking for fields
    const validateRegister = () => {
        const error = {};

        if (isAccountValue(registerValue.userName)) {
            error["userName"] = "Vui lòng nhập Họ Tên của bạn";
        }
        if (isAccountValue(registerValue.phone)) {
            error["phone"] = "Vui lòng nhập số điện thoại";
        }
        if (isAccountValue(registerValue.email)) {
            error["email"] = "Vui lòng nhập Email";
        } else {
            if (!isEmailValid(registerValue.email)) {
                error["email"] = "Định dạng Email của bạn không đúng";
            }
        }
        if (isAccountValue(registerValue.password)) {
            error["password"] = "Vui lòng nhập mật khẩu";
        }
        if (isAccountValue(registerValue.confirmPassword)) {
            error["confirmPassword"] = "Bạn cần nhập lại mật khẩu";
        } else if (registerValue.confirmPassword !== registerValue.password) {
            error["confirmPassword"] = "Nhập lại mật khẩu không đúng";
        }
        if (isAccountValue(registerValue.userRegister)) {
            error["userRegister"] =
                "Vui lòng chọn người dùng hoặc chủ nhà hàng";
        }
        setRegisterError(error);

        return Object.keys(error).length === 0;
    };

    const handleChange = (e) => {
        const { value, name } = e.target;

        setRegisterValue({
            ...registerValue,
            [name]: value,
        });
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        if (validateRegister()) {
            console.log(registerValue);
            setRegisterValue({
                userName: "",
                phone: "",
                email: "",
                password: "",
                confirmPassword: "",
                userRegister: "",
            });
        } else {
            console.log("invalid");
        }
    };

    return (
        <div className="form-account">
            <img className="form-account__img" src={ImageAccount} alt="" />
            <div className="wrap-form">
                <div>
                    <h1 className="wrap-form__heading">Đăng Ký Tài Khoản</h1>
                    <form
                        className="form-group"
                        onSubmit={handleSubmitRegister}
                    >
                        <div className="wrap-form__input">
                            <input
                                className="wrap-form__control"
                                type="text"
                                placeholder="Họ và Tên"
                                name="userName"
                                value={registerValue.userName}
                                onChange={handleChange}
                            />
                            {registerError.userName && (
                                <span className="account-error">
                                    {registerError.userName}
                                </span>
                            )}
                        </div>
                        <div className="wrap-form__input">
                            <input
                                className="wrap-form__control"
                                type="phone"
                                placeholder="Số điện thoại"
                                name="phone"
                                value={registerValue.phone}
                                onChange={handleChange}
                            />
                            {registerError.phone && (
                                <span className="account-error">
                                    {registerError.phone}
                                </span>
                            )}
                        </div>
                        <div className="wrap-form__input">
                            <input
                                className="wrap-form__control"
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={registerValue.email}
                                onChange={handleChange}
                            />
                            {registerError.email && (
                                <span className="account-error">
                                    {registerError.email}
                                </span>
                            )}
                        </div>
                        <div className="wrap-form__input">
                            <input
                                className="wrap-form__control"
                                type="password"
                                placeholder="Mật khẩu"
                                name="password"
                                value={registerValue.password}
                                onChange={handleChange}
                            />
                            {registerError.password && (
                                <span className="account-error">
                                    {registerError.password}
                                </span>
                            )}
                        </div>
                        <div className="wrap-form__input">
                            <input
                                className="wrap-form__control"
                                type="password"
                                placeholder="Xác nhận mật khẩu"
                                name="confirmPassword"
                                value={registerValue.confirmPassword}
                                onChange={handleChange}
                            />
                            {registerError.confirmPassword && (
                                <span className="account-error">
                                    {registerError.confirmPassword}
                                </span>
                            )}
                        </div>
                        <div className="wrap-form__radius">
                            <div className="wrap-form__radius-btn">
                                <label className="wrap-form__group">
                                    <input
                                        className="wrap-form__checked"
                                        type="radio"
                                        name="userRegister"
                                        value="user"
                                        onChange={handleChange}
                                    />
                                    Người Dùng
                                </label>
                                <label className="wrap-form__group">
                                    <input
                                        className="wrap-form__checked"
                                        type="radio"
                                        name="userRegister"
                                        value="restaurantOwners"
                                        onChange={handleChange}
                                    />
                                    Chủ Nhà Hàng
                                </label>
                            </div>
                            {registerError.userRegister && (
                                <span className="account-error">
                                    {registerError.userRegister}
                                </span>
                            )}
                        </div>
                        <button className="wrap-form__btn">ĐĂNG KÝ</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormRegister;
