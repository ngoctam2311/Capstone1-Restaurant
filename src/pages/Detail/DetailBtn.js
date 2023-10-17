export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: "120px",
                right: "14px",
                width: "40px",
                height: "40px",
                backgroundColor: "var(--green-color)",
                borderRadius: "6px",
                opacity: "0.6",
                zIndex: 1,
            }}
            onClick={onClick}
        />
    );
}

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                left: "14px",
                top: "120px",
                width: "40px",
                height: "40px",
                backgroundColor: "var(--green-color)",
                borderRadius: "6px",
                zIndex: 1,
                opacity: "0.6",
            }}
            onClick={onClick}
        />
    );
}

// Values for Slider
export const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    draggable: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};
