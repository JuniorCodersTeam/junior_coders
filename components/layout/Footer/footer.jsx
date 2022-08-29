import { Logo } from "../Navbar/Logo";

const Footer = () => {
    return (
        <footer>
            <div className="container">

                <article className="footer-content">
                    
                    <div className="footer-logo">
                        <Logo></Logo>
                    </div>
                    
                    <div className="footer-socials">
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
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
