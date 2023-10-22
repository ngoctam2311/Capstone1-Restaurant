import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Maps({ data }) {
    const handleClickResult = (e) => {
        alert(`click ${data.address.district}`);
    };

    return (
        <div className="search-map" onClick={handleClickResult}>
            <FontAwesomeIcon className="search-map-icon" icon={faLocationDot} />
            <button className="map-btn">{data.address.district}</button>
        </div>
    );
}

export default Maps;
