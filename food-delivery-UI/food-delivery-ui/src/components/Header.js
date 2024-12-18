import { Link } from "react-router-dom";

const Header = () => {

    let currentPath = window.location.pathname;
    
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
                                    <div className="socail_links">
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    <i className="fa fa-instagram"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i className="fa fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i className="fa fa-facebook"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <i className="fa fa-google-plus"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="book_btn d-none d-xl-block">
                                        <Link to="/cart">
                                            <i className="fa fa-shopping-cart"></i>
                                        </Link>
                                        &nbsp;
                                        &nbsp;
                                        <Link to="/login">
                                            Вход / Регистрация
                                        </Link>
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