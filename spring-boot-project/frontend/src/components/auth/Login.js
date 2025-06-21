import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUserProfile, login } from "../../services/userService.js";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e) {
        e.preventDefault();
        try {
            await login({ email, password });
            const user = await getUserProfile();
            localStorage.setItem('user', JSON.stringify(user.data));
            navigate("/menu");
        } catch (err) {
            console.error("Login error:", err);
            alert("Грешен имейл или парола");
        }
    }

    return (
        <div>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <form className="form-contact contact_form" onSubmit={submit}>
                                <h2 className="contact-title">Влез в профила си</h2>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="email"
                                                type="email"
                                                placeholder="Имейл / потребителско име"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                name="password"
                                                type="password"
                                                placeholder="Парола"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="boxed-btn3">Влез</button>
                                    <span style={{ color: 'white', marginLeft: '5px' }}>
                                        Нямаш профил? Регистрирай се <Link to="/register" style={{ color: '#F2C64D' }}>тук!</Link>
                                    </span>
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
    );
};

export default Login;
