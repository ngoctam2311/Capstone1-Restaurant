import { useState } from "react";
import { Link } from "react-router-dom";
import "./formAccount.css";
import { isAccountValue, isEmailValid } from "./index.js";
import ImageAccount from "../../images/imgAccount.png";

const initLoginValue = {
    email: "",
    password: "",
};

function FormLogIn() {
    const [loginValue, setLoginValue] = useState(initLoginValue);
    const [loginError, setLoginError] = useState({});

    const validateRegister = () => {
        const error = {};

        if (isAccountValue(loginValue.email)) {
            error["email"] = "Vui lòng nhập Email";
        } else {
            if (!isEmailValid(loginValue.email)) {
                error["email"] = "Định dạng Email của bạn không đúng";
            }
        }
        if (isAccountValue(loginValue.password)) {
            error["password"] = "Vui lòng nhập mật khẩu";
        }

        setLoginError(error);

        return Object.keys(error).length === 0;
    };

    const handleChange = (e) => {
        const { value, name } = e.target;

        setLoginValue({
            ...loginValue,
            [name]: value,
        });
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        if (validateRegister()) {
            console.log(loginValue);
        } else {
            console.log("invalid");
        }
    };

    return (
        <div className="form-account">
            <img className="form-account__img" src={ImageAccount} alt="" />
            <div className="wrap-form">
                <div>
                    <h1 className="wrap-form__heading">ĐĂNG NHẬP</h1>
                    <form className="form-group" onSubmit={handleSubmitLogin}>
                        <div className="wrap-form__input">
                            <input
                                className="wrap-form__control"
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={loginValue.email}
                                onChange={handleChange}
                            />
                            {loginError.email && (
                                <span className="account-error">
                                    {loginError.email}
                                </span>
                            )}
                        </div>
                        <div className="wrap-form__input">
                            <input
                                className="wrap-form__control"
                                type="password"
                                placeholder="Mật khẩu"
                                name="password"
                                value={loginValue.password}
                                onChange={handleChange}
                            />
                            {loginError.password && (
                                <span className="account-error">
                                    {loginError.password}
                                </span>
                            )}
                        </div>
                        <button className="wrap-form__btn">ĐĂNG NHẬP</button>
                    </form>
                    <div className="login-footer">
                        <Link to="/" className="login-footer__forgot">
                            Quên Mật Khẩu?
                        </Link>
                        <Link to="/register" className="login-footer__register">
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormLogIn;
