import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Login = () => {
    return <div>
        <Header />
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <form className="form-contact contact_form" action="/" method="post" id="contactForm">
                            <h2 className="contact-title">Влез в профила си</h2>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control valid" name="email" id="email" type="email" placeholder="Имейл / потребителско име" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" name="subject" id="password" type="password" placeholder="Парола" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="boxed-btn3">Влез</button>
                                <span style={{ color: 'white', marginLeft: '5px' }}>Нямаш профил? Регистрирай се <Link to="/register" style={{ color: '#F2C64D' }}>тук!</Link></span>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <img src='img/FH_transparent_login.png' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
};

export default Login;