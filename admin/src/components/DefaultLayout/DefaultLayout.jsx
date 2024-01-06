import Header from "../Header/Header";
import SlideBar from "../SlideBar/SlideBar";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <div
                className="slide"
                style={{
                    height: "46px",
                    width: "100%",
                    backgroundColor: "#DBF1F4",
                }}
            ></div>
            <div style={{ display: "flex" }}>
                <SlideBar />
                <div
                    style={{
                        width: "100%",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
