import { Logo } from "../Navbar/Logo";
import {AiFillFacebook, AiOutlineInstagram} from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <article className="footer-content">
                    
                    <div className="footer-logo">
                        <Logo></Logo>
                    </div>
                    
                    <div className="footer-socials">
                        <AiFillFacebook />
                        <AiOutlineInstagram />
                    </div>

                </article>

                <article className="footer-copyright">
                    <span>COPYRIGHT &copy; JUNIORCODERS 2022</span>
                </article>

            </div>
        </footer>
    );
};

export default Footer;
