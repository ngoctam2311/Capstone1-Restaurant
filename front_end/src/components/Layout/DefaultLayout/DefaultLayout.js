import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div
                style={{
                    marginTop:
                        "calc(var(--default-layout-header-height) + 40px)",
                }}
            >
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
