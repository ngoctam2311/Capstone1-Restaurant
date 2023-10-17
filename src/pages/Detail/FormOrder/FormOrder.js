import { useState } from "react";
import "./formOrder.css";
import { isAccountValue, isEmailValid } from "../../FormAccount/index";

const initOrderValue = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: 0,
};

function FormOrder() {
    const [minDate, setMinDate] = useState(getToday());
    const [orderValue, setOrderValue] = useState(initOrderValue);
    const [orderError, setOrderError] = useState({});

    const validateRegister = () => {
        const error = {};

        if (isAccountValue(orderValue.name)) {
            error["name"] = "Vui lòng nhập Họ Tên";
        }
        if (isAccountValue(orderValue.phone)) {
            error["phone"] = "Vui lòng nhập số điện thoại";
        }
        if (isAccountValue(orderValue.email)) {
            error["email"] = "Vui lòng nhập Email";
        } else {
            if (!isEmailValid(orderValue.email)) {
                error["email"] = "Định dạng Email của bạn không đúng";
            }
        }
        if (isAccountValue(orderValue.date)) {
            error["date"] = "Vui lòng chọn ngày";
        }
        if (isAccountValue(orderValue.time)) {
            error["time"] = "Vui lòng chọn thời gian";
        }
        if (isAccountValue(orderValue.people)) {
            error["people"] = "Vui lòng chọn sô người";
        }
        setOrderError(error);

        return Object.keys(error).length === 0;
    };

    // This function does not let the user select yesterday's date
    function getToday() {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }

        return `${year}-${month}-${day}`;
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setOrderValue({
            ...orderValue,
            [name]: value,
        });
        setMinDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateRegister()) {
            console.log(orderValue);
            setOrderValue({
                name: "",
                email: "",
                phone: "",
                date: "",
                time: "",
                people: 0,
            });
            alert("Đặt bàn thành công");
        } else {
            console.log("invalid");
        }
    };

    return (
        <form className="form-order" onSubmit={handleSubmit}>
            <h2 className="form-order__heading">ĐẶT BÀN</h2>
            <div>
                <div className="group-order">
                    <label htmlFor="name" className="group-order__title">
                        Họ và tên
                    </label>
                    <input
                        className="group-order__input"
                        id="name"
                        type="text"
                        name="name"
                        value={orderValue.name}
                        onChange={handleChange}
                    />
                </div>
                {orderError.name && (
                    <span className="order-error">{orderError.name}</span>
                )}
            </div>
            <div>
                <div className="group-order">
                    <label htmlFor="email" className="group-order__title">
                        Email
                    </label>
                    <input
                        className="group-order__input"
                        id="email"
                        type="email"
                        name="email"
                        value={orderValue.email}
                        onChange={handleChange}
                    />
                </div>
                {orderError.email && (
                    <span className="order-error">{orderError.email}</span>
                )}
            </div>
            <div>
                <div className="group-order">
                    <label htmlFor="phone" className="group-order__title">
                        Số điện thoại
                    </label>
                    <input
                        className="group-order__input"
                        id="phone"
                        type="phone"
                        name="phone"
                        value={orderValue.phone}
                        onChange={handleChange}
                    />
                </div>
                {orderError.phone && (
                    <span className="order-error">{orderError.phone}</span>
                )}
            </div>
            <div>
                <div className="group-order">
                    <label htmlFor="date" className="group-order__title">
                        Ngày
                    </label>
                    <input
                        className="group-order__input"
                        id="date"
                        type="date"
                        min={minDate}
                        onChange={handleChange}
                        name="date"
                        value={orderValue.date}
                    />
                </div>
                {orderError.date && (
                    <span className="order-error">{orderError.date}</span>
                )}
            </div>
            <div>
                <div className="group-order">
                    <label htmlFor="time" className="group-order__title">
                        Thời gian
                    </label>
                    <select
                        className="group-order__input"
                        name="time"
                        id="time"
                        value={orderValue.time}
                        onChange={handleChange}
                    >
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                        <option value="22:30">22:30</option>
                    </select>
                </div>
                {orderError.time && (
                    <span className="order-error">{orderError.time}</span>
                )}
            </div>
            <div>
                <div className="group-order">
                    <label htmlFor="people" className="group-order__title">
                        Số người
                    </label>
                    <select
                        className="group-order__input"
                        name="people"
                        id="people"
                        value={orderValue.people}
                        onChange={handleChange}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                {orderError.people && (
                    <span className="order-error">{orderError.people}</span>
                )}
            </div>
            <button className="form-order__btn">Gửi</button>
        </form>
    );
}

export default FormOrder;
