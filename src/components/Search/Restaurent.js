import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.css";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function Restaurent({ data }) {
    return (
        <div className="popper-restaurent">
            <FontAwesomeIcon
                className="popper-restaurent-icon"
                icon={faUtensils}
            />
            <button className="popper-restaurent__btn">
                <p className="popper-restaurent__name">{data.restaurantName}</p>
                <h4 className="popper-restaurent__address">
                    {data.restaurantAddress}
                </h4>
            </button>
        </div>
    );
}

export default Restaurent;
