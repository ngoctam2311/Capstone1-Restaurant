import { Star, StarHalf, StarBorder } from "@mui/icons-material";

export const formatVND = (num) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(num);
};

const STAR_COUNT = 5;
export const renderRating = (value) => {
  const stars = Array.from({ length: STAR_COUNT }, () => (
    <StarBorder className="yellow" fontSize="large" />
  ));
  let i;
  for (i = 0; i < value; i++) {
    // this will loop Math.floor(value) times
    stars[i] = <Star className="yellow" fontSize="large" />;
  }

  if (value % 1 != 0)
    // if value is a decimal, add a half star
    stars[i - 1] = <StarHalf className="yellow" fontSize="large" />;
  return <>{stars}</>;
};
