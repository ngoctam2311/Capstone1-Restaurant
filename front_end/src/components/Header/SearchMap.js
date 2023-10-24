import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import "./header.css";
import Maps from "../Search/Maps";
import WrapperSearch from "../Search/WrapperSearch";
import useDebounce from "../../Hooks/useDebounce";

function SearchMap() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [selectDistrict, setSelectDistrict] = useState("");

    const inputRef = useRef();

    const fetchData = (value) => {
        axios
            .get(
                `http://localhost:5555/api/restaurant/?page=1&limit=10&populate=resMenuInfor`
            )
            .then((res) => {
                const result = res.data.data.filter((map) => {
                    const { district } = map.address;
                    return (
                        district &&
                        value &&
                        district.toLowerCase().includes(value)
                    );
                });
                // console.log(result);
                setSearchResult(result);
            });
    };

    useEffect(() => {
        if (searchValue && !searchValue.trim()) {
            fetchData(searchValue);
        }
    }, [searchValue]);

    // Thay đổi SearchValue
    useEffect(() => {
        if (selectDistrict) {
            setSearchValue(selectDistrict);
        }
    }, [selectDistrict]);

    // Clear SearchValue và focus lại
    const handleClear = () => {
        setSearchValue("");
        inputRef.current.focus();
    };

    const handleChange = (value) => {
        setSearchValue(value);
        fetchData(value);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <WrapperSearch>
                        <div className="search-result" tabIndex="-1" {...attrs}>
                            {searchResult.map((result) => (
                                <Maps
                                    key={result._id}
                                    data={result}
                                    setSelectDistrict={setSelectDistrict}
                                />
                            ))}
                        </div>
                    </WrapperSearch>
                )}
                onClickOutside={handleHideResult}
            >
                <div className="wrapp-icon-address">
                    <FontAwesomeIcon
                        className="icon-map"
                        icon={faLocationDot}
                    />
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className="search-address"
                        type="text"
                        placeholder="Đà Nẵng"
                        spellCheck={false}
                        onChange={(e) => handleChange(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && (
                        <button onClick={handleClear}>
                            <FontAwesomeIcon
                                className="icon-address"
                                icon={faXmark}
                            />
                        </button>
                    )}
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SearchMap;
