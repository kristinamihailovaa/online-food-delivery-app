import { Link } from "react-router-dom";
import { register } from "../../services/userService";

const Register = () => {
    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const phoneNumber = formData.get("phoneNumber");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password !== confirmPassword) {
            alert("Паролите не съвпадат");
            return;
        }

        register({ firstName, lastName, phoneNumber, email, password, confirmPassword })
            .then(() => alert("Успешна регистрация!"))
            .catch(err => {
                console.error(err);
                alert("Възникна грешка при регистрацията.");
            });
    }

    return (
        <div>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <form className="form-contact contact_form" onSubmit={handleSubmit} id="contactForm">
                                <h2 className="contact-title">Регистрирай се!</h2>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control valid" name="firstName" placeholder="Име" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control valid" name="lastName" placeholder="Фамилия" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control valid" name="phoneNumber" type="tel" placeholder="Мобилен телефон" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control valid" name="email" type="email" placeholder="Имейл" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" name="password" type="password" placeholder="Парола" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" name="confirmPassword" type="password" placeholder="Повтори паролата" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="boxed-btn3">Регистрация</button>
                                    <span style={{ color: 'white', marginLeft: '5px' }}>
                                        Имаш профил? Влез <Link to="/login" style={{ color: '#F2C64D' }}>тук!</Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-group">
                                <img src='img/FH_transparent_register.png' alt='Register decor' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
