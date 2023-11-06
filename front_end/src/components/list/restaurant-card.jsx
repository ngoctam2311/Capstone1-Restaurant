import React from "react";
import Image from "next/image";
import img from "../../images/kem-dua.jpeg";
import { FavoriteBorder, Loyalty } from "@mui/icons-material";
import { formatVND, renderRating } from "../../utils/helper-func";
import { Box, Divider } from "@mui/material";
const RestaurantCard = () => {
  return (
    <Box className="prod-card-large position-relative">
      <div className="prod-img position-relative">
        <Image src={img} />
      </div>
      <Box className="resCard-content">
        <Box sx={{ px: 1, mt: 1 }} className="prod-title">
          <h4 className="prod-title-text ellipsis">Kem dừa Mã lai</h4>
        </Box>
        <Box sx={{ px: 1, mt: -1 }}>
          <span className="res-address ellipsis">12 Lê Đình Lý, P. Thạc Gián, Quận Thanh Khê, Đà Nẵng</span>
        </Box>

        <Box sx={{ px: 1, display: "flex", gap: 2 }} className="prod-rate">
          <div className="prod-star">{renderRating(4.5)}</div>
          <em className="rate-counter primary-text">(4)</em>
        </Box>

        <Box sx={{ px: 1, my: 1, color: "#00665c", fontSize: '14px' }} className="prod-price">
          <span className="price medium-text">Giá trung bình {formatVND(125000)}</span>
        </Box>
        <Divider/>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1, mx: 1, py: 1}}>
          <Loyalty color="error" fontSize="large"/>
          <span style={{color: '#00665c', fontSize: '14px', fontWeight: 500}}>Mã giảm 25%</span>
        </Box>
      </Box>
      <div className="opentime-status">
        <span className="stt stt-online" title="Mở cửa"></span>
      </div>
    </Box>
  );
};

export default RestaurantCard;
