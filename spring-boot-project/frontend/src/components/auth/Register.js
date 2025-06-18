import { Link } from "react-router-dom";
import { register } from "../../services/userService";

const Register = () => {
    function submit(formData) {
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const phoneNumber = formData.get("phoneNumber");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");
        register({firstName, lastName, phoneNumber, confirmPassword, password, email, });
    }

    return <div>
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <form className="form-contact contact_form" action={submit} method="post" id="contactForm">
                            <h2 className="contact-title">Регистрирай се!</h2>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control valid" name="firstName" id="firstname" type="firstname" placeholder="Име" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control valid" name="lastName" id="lastname" type="lastname" placeholder="Фамилия" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control valid" name="phoneNumber" id="PhoneNumber" type="tel" placeholder="Мобилен телефон" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control valid" name="email" id="email" type="email" placeholder="Имейл" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" name="password" id="password" type="password" placeholder="Парола" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input className="form-control" name="confirmPassword" id="confirmPassword" type="password" placeholder="Повтори паролата" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="boxed-btn3">Регистрация</button>
                                <span style={{ color: 'white', marginLeft: '5px' }}>Имаш профил? Влез <Link to="/login" style={{ color: '#F2C64D' }}>тук!</Link></span>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <img src='img/FH_transparent_register.png' alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
};

export default Register;