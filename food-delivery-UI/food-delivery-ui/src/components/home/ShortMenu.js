import { Link } from "react-router-dom";

const ShortMenu = () => {
    return <div>
        <div className="best_burgers_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center mb-80">
                            <span>Нашето меню</span>
                            <h3>Вкусната храна е начин на живот!</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-lg-6">
                        <div className="single_delicious d-flex align-items-center">
                            <div className="thumb">
                                <Link to="/">
                                    <img src="img/burger/1.png" alt="" />
                                </Link>
                            </div>
                            <div className="info">
                                <Link to="/"><h3>Телешки бургер</h3></Link>
                                <Link to="/"><p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!</p></Link>
                                <span>14.99лв</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="single_delicious d-flex align-items-center">
                            <div className="thumb">
                                <Link to="/">
                                    <img src="img/burger/2.png" alt="" />
                                </Link>
                            </div>
                            <div className="info">
                                <h3>Чедър бургер</h3>
                                <p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!</p>
                                <span>10.99лв</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single_delicious d-flex align-items-center">
                            <div className="thumb">
                                <img src="img/burger/3.png" alt="" />
                            </div>
                            <div className="info">
                                <h3>Блек ангъс бургер</h3>
                                <p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!</p>
                                <span>19.99лв</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-lg-6">
                        <div className="single_delicious d-flex align-items-center">
                            <div className="thumb">
                                <img src="img/burger/4.png" alt="" />
                            </div>
                            <div className="info">
                                <h3>Зингер бургер</h3>
                                <p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!</p>
                                <span>11.99лв</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single_delicious d-flex align-items-center">
                            <div className="thumb">
                                <img src="img/burger/5.png" alt="" />
                            </div>
                            <div className="info">
                                <h3>Туна бургер</h3>
                                <p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!</p>
                                <span>12.99лв</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single_delicious d-flex align-items-center">
                            <div className="thumb">
                                <img src="img/burger/6.png" alt="" />
                            </div>
                            <div className="info">
                                <h3>Рокер бургер</h3>
                                <p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!</p>
                                <span>13.99лв</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single_delicious d-flex align-items-center">
                            <div className="thumb">
                                <img src="img/burger/7.png" alt="" />
                            </div>
                            <div className="info">
                                <h3>Пушен бургер</h3>
                                <p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!</p>
                                <span>10.99лв</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single_delicious d-flex align-items-center">
                            <div className="thumb">
                                <img src="img/burger/8.png" alt="" />
                            </div>
                            <div className="info">
                                <h3>Мортадела бургер</h3>
                                <p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!</p>
                                <span>9.99лв</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="iteam_links">
                            <Link className="boxed-btn5" to="/menu">Виж още вкусотии</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default ShortMenu;