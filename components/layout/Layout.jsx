import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/footer";
import { WebsiteHead } from "../Head";

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <WebsiteHead/>
            {children}
            <Footer />
        </>
    );
};
