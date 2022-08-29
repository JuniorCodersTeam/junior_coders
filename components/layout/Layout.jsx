import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};
