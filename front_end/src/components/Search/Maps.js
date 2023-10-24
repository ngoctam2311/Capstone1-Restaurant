import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Maps({ data, setSelectDistrict }) {
    const { district } = data.address;

    const handleClickResult = (e) => {
        setSelectDistrict(district);
    };

    return (
        <div className="search-map" onClick={handleClickResult}>
            <FontAwesomeIcon className="search-map-icon" icon={faLocationDot} />
            <button className="map-btn">{district}</button>
        </div>
    );
}

export default Maps;
