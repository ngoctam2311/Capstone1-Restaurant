import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageAccount from "../../img/imgAccount.png";
import "./login.css";
import { UserContext } from "../../hook/UserContext";
// import { useDispatch } from "react-redux";
// import { hanldeLoginRedux } from "../../redux/actions/userAction";

// Check if the user left it blank
export const isAccountValue = (value) => {
    return !value || value.trim().length < 1;
};

// Check if the email is in the correct format
export const isEmailValid = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
};

const initLoginValue = {
    email: "",
    password: "",
};

const Login = () => {
    const [loginValue, setLoginValue] = useState(initLoginValue);
    const [loginError, setLoginError] = useState({});
    const [loginErrorMessage, setLoginErrorMessage] = useState("");

    const { loginContext } = useContext(UserContext);
    const navigate = useNavigate();

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

    const handleSubmitLogin = async (e) => {
        e.preventDefault();

        if (validateRegister()) {
            try {
                let response = await axios.post(
                    "http://localhost:3000/api/auth/login",
                    loginValue,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                    }
                );
                loginContext(response.data.status, response.data.token);
                navigate("/");
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setLoginErrorMessage("Email hoặc mật khẩu không chính xác");
                } else {
                    console.error("Error:", error);
                }
            }
            // finally {
            //     setIsLoading(false);
            // }
        } else {
            console.log("Invalid form");
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
                            {(loginError.password && (
                                <span className="account-error">
                                    {loginError.password}
                                </span>
                            )) ||
                                loginErrorMessage}
                        </div>
                        <button className="wrap-form__btn">ĐĂNG NHẬP</button>
                    </form>
                    <div className="login-footer">
                        <Link to="#" className="login-footer__forgot">
                            Quên Mật Khẩu?
                        </Link>
                        <Link to="#" className="login-footer__register">
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
