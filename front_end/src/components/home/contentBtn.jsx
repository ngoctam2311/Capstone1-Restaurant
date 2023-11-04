export const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      top: "-30px",
      right: "6px",
      borderRadius: "6px",
      backgroundColor: "var(--green-color)",
      zIndex: 1,
    }}
    onClick={onClick}
  />
);

export const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      backgroundColor: "var(--green-color)",
      left: "1110px",
      top: "-30px",
      borderRadius: "6px",
      zIndex: 1,
    }}
    onClick={onClick}
  />
);
