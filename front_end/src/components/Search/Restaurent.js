import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search.css";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function Restaurent({ data }) {
    const handleClickResult = (e) => {
        alert(`click ${data.resname}`);
    };
    return (
        <div className="popper-restaurent" onClick={handleClickResult}>
            <FontAwesomeIcon
                className="popper-restaurent-icon"
                icon={faUtensils}
            />
            <button className="popper-restaurent__btn">
                <p className="popper-restaurent__name">{data.resname}</p>
                <h4 className="popper-restaurent__address">
                    {data.address.district}
                </h4>
            </button>
        </div>
    );
}

export default Restaurent;
