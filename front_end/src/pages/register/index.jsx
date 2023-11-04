import React from "react";
import { isAccountValue, isEmailValid } from "../../utils/validation";
import { register } from "../../apis/auth";

function Register() {
  const [registerValue, setRegisterValue] = useState(initRegisterValue);
  const [registerError, setRegisterError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [resgistered, setResgistered] = useState("");

  // error checking for fields
  const validateRegister = () => {
    const error = {};
    if (isAccountValue(registerValue.firstName)) {
      error["firstName"] = "Vui lòng nhập Họ của bạn";
    }
    if (isAccountValue(registerValue.lastName)) {
      error["lastName"] = "Vui lòng nhập Tên của bạn";
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
    if (isAccountValue(registerValue.role)) {
      error["role"] = "Vui lòng chọn người dùng hoặc chủ nhà hàng";
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

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    if (validateRegister()) {
      setIsLoading(true);
      try {
        const res = await register(JSON.stringify(registerValue))
        console.log(res)
        localStorage.setItem("register", JSON.stringify(response.data));
        setResgistered("Vui lòng kiểm tra email để xác thực");
        setTimeout(() => {
          setResgistered("");
        }, 5000);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Invalid form");
    }
  };

  return (
    <div className="form-account">
      <img className="form-account__img" src={ImageAccount} alt="" />
      <div className="wrap-form">
        {resgistered && <span className="register__verify">{resgistered}</span>}
        <div>
          <h1 className="wrap-form__heading">Đăng Ký Tài Khoản</h1>
          <form className="form-group" onSubmit={handleSubmitRegister}>
            <div className="wrap-form__input">
              <input
                className="wrap-form__control"
                type="text"
                placeholder="Họ"
                name="firstName"
                value={registerValue.firstName}
                onChange={handleChange}
              />
              {registerError.firstName && (
                <span className="account-error">{registerError.firstName}</span>
              )}
            </div>
            <div className="wrap-form__input">
              <input
                className="wrap-form__control"
                type="text"
                placeholder="Tên"
                name="lastName"
                value={registerValue.lastName}
                onChange={handleChange}
              />
              {registerError.lastName && (
                <span className="account-error">{registerError.lastName}</span>
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
                <span className="account-error">{registerError.phone}</span>
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
                <span className="account-error">{registerError.email}</span>
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
                <span className="account-error">{registerError.password}</span>
              )}
            </div>
            <div className="wrap-form__radius">
              <div className="wrap-form__radius-btn">
                <label className="wrap-form__group">
                  <input
                    className="wrap-form__checked"
                    type="radio"
                    name="role"
                    value="customer"
                    onChange={handleChange}
                  />
                  Người Dùng
                </label>
                <label className="wrap-form__group">
                  <input
                    className="wrap-form__checked"
                    type="radio"
                    name="role"
                    value="restaurant-owner"
                    onChange={handleChange}
                  />
                  Chủ Nhà Hàng
                </label>
              </div>
              {registerError.role && (
                <span className="account-error">{registerError.role}</span>
              )}
            </div>
            {isLoading ? (
              <span className="disabled">Vui lòng chờ...</span>
            ) : (
              <button className="wrap-form__btn">ĐĂNG KÝ</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
