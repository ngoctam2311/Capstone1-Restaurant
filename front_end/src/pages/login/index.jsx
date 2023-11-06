"use client";
import { logIn } from "../../apis/auth";
import React from "react";

function Login() {
  const [loginValue, setLoginValue] = useState(initLoginValue);
  const [loginError, setLoginError] = useState({});
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

  // useEffect(() => {
  //     let token = localStorage.getItem("login");
  //     if (token) {
  //         navigate(routes.home);
  //     }
  // }, []);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    if (validateRegister()) {
      try {
        const res = await logIn(JSON.stringify(loginValue))
        console.log("Formlogin: ", res.token);
        // loginContext(response.data.status, response.data.token);
        localStorage.setItem("access_token", res.token)
        navigate("/");
      } catch (error) {
        console.error("Error:", error);
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
                <span className="account-error">{loginError.email}</span>
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
                <span className="account-error">{loginError.password}</span>
              )}
            </div>
            <button className="wrap-form__btn">ĐĂNG NHẬP</button>
          </form>
          <div className="login-footer">
            <Link to="/" className="login-footer__forgot">
              Quên Mật Khẩu?
            </Link>
            <Link to={routes.register} className="login-footer__register">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;