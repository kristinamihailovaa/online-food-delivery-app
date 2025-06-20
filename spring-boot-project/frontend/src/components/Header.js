import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/userService";

const Header = () => {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;

    const user = JSON.parse(localStorage.getItem('user'));

    const redirectToAdmin = () => {
        if (currentPath.includes('admin')) {
            navigate('/');
        } else {
            navigate('/admin');
        }
    };

    const logoutuser = () => {
        logout();
        localStorage.removeItem("user");
    }

    return <div>
        <header>
            <div className="header-area ">
                <div id="sticky-header" className="main-header-area">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-xl-5 col-lg-5">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><Link className={currentPath === '/' ? 'active' : ''} to="/">Начало</Link></li>
                                            <li><Link to="/menu" className={currentPath.includes('/menu') ? 'active' : ''}>Меню</Link></li>
                                            <li><Link to="/about" className={currentPath.includes('/about') ? 'active' : ''}>За нас</Link></li>
                                            <li><Link to="/contact" className={currentPath.includes('/contact') ? 'active' : ''}>Контакти</Link></li>
                                            {user && <li><Link to="/myOrders" className={currentPath.includes('/myOrders') ? 'active' : ''}>Моите поръчки</Link></li>}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo-img">
                                    <Link to="/">
                                        <img src="img/logo.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                                <div className="book_room">
                                    <div className="main-menu  d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link to="/cart" className={currentPath.includes('/cart') ? 'active' : ''}>Количка</Link></li>
                                                {!user ?? <li><Link to="/" onClick={logoutuser}>Излизане</Link></li>}
                                                {user ?? <li><Link to="/login" className={currentPath.includes('/login') || currentPath.includes('register') ? 'active' : ''}>Вход / регистрация</Link></li>}
                                                {!(user && user.isAdmin) ?? <li>
                                                    <div className="switch-wrap d-flex justify-content-between">
                                                        <div className="confirm-switch">
                                                            <input type="checkbox" id="confirm-switch" onChange={redirectToAdmin}
                                                                checked={currentPath.includes('/admin') ? true : false} />
                                                            <label for="confirm-switch"></label>
                                                        </div>
                                                        <p>Админ</p>
                                                    </div>
                                                </li>}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
};

export default Header;