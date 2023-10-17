import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import "./header.css";
import Restaurent from "../Search/Restaurent";
import WrapperSearch from "../Search/WrapperSearch";

function SearchRestaurent() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResule] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }

        fetch(`http://localhost:3000/foodAddress`)
            .then((res) => res.json())
            .then((res) => setSearchResult(res));
    }, [searchValue]);

    const handlClear = () => {
        setSearchValue("");
        inputRef.current.focus();
    };

    const handlHideResult = () => {
        setShowResule(false);
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
                                <Restaurent key={result.id} data={result} />
                            ))}
                        </div>
                    </WrapperSearch>
                )}
                onClickOutside={handlHideResult}
            >
                <div className="wrapp-icon-restaurent">
                    <FontAwesomeIcon
                        className="icon-search"
                        icon={faMagnifyingGlass}
                    />
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className="search-restaurent"
                        type="text"
                        placeholder="Tên nhà hàng"
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResule(true)}
                    />
                    {!!searchValue && (
                        <button onClick={handlClear}>
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

export default SearchRestaurent;
