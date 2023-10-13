import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Maps({ data }) {
    return (
        <div className="search-map">
            <FontAwesomeIcon className="search-map-icon" icon={faLocationDot} />
            <button className="map-btn">{data.address}</button>
        </div>
    );
}

export default Maps;
