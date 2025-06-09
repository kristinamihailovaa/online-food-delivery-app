import { Link } from "react-router-dom";
import { getUserProfile, login } from "../../services/userService.js";

const Login = () => {
    function submit(formData) {
        const password = formData.get("password")
        const email = formData.get("email")
        login({password, email});
        var user = getUserProfile();
        localStorage.setItem('user', JSON.stringify(user.data));
    }

    return <div>
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <form className="form-contact contact_form" action={submit} method="post" id="contactForm">
                            <h2 className="contact-title">Влез в профила си</h2>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control valid" name="email" id="email" type="email" placeholder="Имейл / потребителско име" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" name="password" id="password" type="password" placeholder="Парола" />
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
                            <img src='img/FH_transparent_login.png' alt="Login decoration"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
};

export default Login;