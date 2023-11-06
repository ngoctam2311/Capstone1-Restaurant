import React, { useState } from "react";
import { Box, Slider } from "@mui/material";
import { formatVND } from "../../utils/helper-func"

function valuetext(value) {
  return `${value}đ`;
}

const Tag = ({ name }) => {
  return <Box className="restaurant-tag">{name}</Box>;
};

const tagList = ["dessert", "seafood", "beafsteak", "cheese", "pizza", "vegan"];

const filter = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="restaurant-filter">
      <div id="product-category" className="filter-option">
        <h4>Danh mục nhà hàng</h4>
        <ul className="category-list">
          <li className="position-relative">Món Hàn</li>
          <li className="position-relative">Món Âu</li>
          <li className="position-relative">Món Thái</li>
          <li className="position-relative">Đồ chay</li>
        </ul>
      </div>

      <div id="price-filter" className="filter-option">
        <h4>Khoảng giá</h4>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          step={10}
          min={10}
          max={110}
          marks
        />
        <Box className="secondary-text-color" sx={{textAlign: 'right', mb: 1}}>
          Từ {formatVND(value[0])} tới {formatVND(value[1])}
        </Box>
        <button type="submit" id="submit-price-fillter">
          Áp dụng giá
        </button>
      </div>
      <Box sx={{ pt: 2 }}>
        <h4>Tags</h4>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", pt: 2 }}>
          {tagList.map((tag, idx) => {
            return <Tag key={idx} name={tag} />;
          })}
        </Box>
      </Box>
    </div>
  );
};

export default filter;
