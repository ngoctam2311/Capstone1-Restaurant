import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import "./header.css";
import Maps from "../Search/Maps";
import WrapperSearch from "../Search/WrapperSearch";

function SearchMap() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }

        fetch(`http://localhost:3000/maps`)
            .then((res) => res.json())
            .then((res) => setSearchResult(res));
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue("");
        inputRef.current.focus();
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
                                <Maps key={result.id} data={result} />
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
                        onChange={(e) => setSearchValue(e.target.value)}
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
