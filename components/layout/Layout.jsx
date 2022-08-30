import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/footer";
import AboutUs from "./AboutUs/AboutUs";

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};
