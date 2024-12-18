import { Link } from "react-router-dom";

const Footer = () => {
    return <div>
        <footer className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer_widget text-center ">
                                <h3 className="footer_title pos_margin">
                                    София
                                </h3>
                                <p>бул. България 120<br />
                                    <Link to="/contact">info@foodheaven.com</Link></p>
                                <Link className="number" to="/contact">+123 456 7890</Link>

                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12 col-lg-4">
                            <div className="footer_widget">
                                <h3 className="footer_title">
                                    Абонирай се!
                                </h3>
                                <form action="#" className="newsletter_form">
                                    <input type="text" placeholder="Твоят имейл..." />
                                    <button type="submit">Абонирай се</button>
                                </form>
                                <p className="newsletter_text">Нашият бюлетин с неустоими оферти 🍟</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12 col-lg-4">
                            <div className="footer_widget">
                                <div className="socail_links text-center">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <i className="ti-instagram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="ti-twitter-alt"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="ti-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="fa fa-google-plus"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center">
                                Food Heaven &copy; Всички права запазени.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
};

export default Footer;