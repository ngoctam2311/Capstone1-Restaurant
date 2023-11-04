import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import Maps from "../search/map";
import WrapperSearch from "../search/wrapper-search";
import { searchMap } from "../../apis/home";

function SearchMap() {
  // const { address } = location.data;
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [selectDistrict, setSelectDistrict] = useState("");

  // console.log(searchResult.data);

  const inputRef = useRef();

  const fetchData = async (value) => {
    // const { data } = await axios.get(
    //   `http://localhost:5555/api/restaurant/search?search=${encodeURIComponent(
    //     value
    //   )}&page=1&limit=1`
    // );
    // .then((data) => {
    // const result = res.data.data.filter((map) => {
    //     const { district } = map.address;
    //     return (
    //         district &&
    //         value &&
    //         district.toLowerCase().includes(value)
    //     );
    // });
    //  console.log(result);
    // setSearchResult(data.data);
    // });
    try {
      const res = await searchMap(value);
      let searchResult = res.data.filter((map) => {
        const { district } = map.address;
        return district && value && district.toLowerCase().includes(value);
      });
      setSearchResult(searchResult);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!searchValue.trim()) {
      return;
    }
    fetchData(searchValue);
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
          <FontAwesomeIcon className="icon-map" icon={faLocationDot} />
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
              <FontAwesomeIcon className="icon-address" icon={faXmark} />
            </button>
          )}
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default SearchMap;
