import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="default-layout">{children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
