import React, { useState } from "react";
import styles from "../../styles/customer/restaurant-list.module.css";
import {
  Breadcrumbs,
  Container,
  Grid,
  Pagination,
  PaginationItem,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Filter from "../../components/list/filter";
import RestaurantCard from "../../components/list/restuarant-card";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// ------------- FAKE DATA ------------------------------
const restaurants = Array.from(Array(50).keys());

const RestaurantList = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <span key="3">Danh sách nhà hàng</span>,
  ];

  const [sortCiteria, setSortCiteria] = useState("default");

  const handleChange = (event) => {
    setSortCiteria(event.target.value);
  };

  return (
    <Container maxWidth="xl" className={`main-content`}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="large" />} aria-label="breadcrumb" sx={{ py: 2 }}>
        {breadcrumbs}
      </Breadcrumbs>
      <Box sx={{pb: 2}}>
        <h2>Danh sách nhà hàng</h2>
      </Box>
      <Grid container spacing={4}>
        <Grid item lg={3}>
          <Filter />
        </Grid>

        <Grid item lg={9}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <p>Có tất cả 50 nhà hàng</p>
            <Box>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                  labelId="sort-citeria-select"
                  id="sort-citeria-select"
                  value={sortCiteria}
                  onChange={handleChange}
                >
                  <MenuItem value="default">
                    <em>Sắp xếp mặc định</em>
                  </MenuItem>
                  <MenuItem value={"popularity"}>Theo mức độ phổ biến</MenuItem>
                  <MenuItem value={"rating"}>Theo đánh giá</MenuItem>
                  <MenuItem value={"nearest"}>Gần tôi nhất</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Grid container spacing={2}>
            {restaurants.map((restaurant, idx) => {
              return (
                <Grid item lg={3} key={idx}>
                  <RestaurantCard />
                </Grid>
              );
            })}
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={10}
              renderItem={(item) => (
                <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
              )}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RestaurantList;
