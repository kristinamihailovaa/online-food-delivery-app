import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";

const Cart = () => {
    return <div>
        <Header />
        <div class="bradcam_area breadcam_bg overlay">
            <h3 style={{ fontWeight: 'bold' }}>ПОРЪЧКА</h3>
        </div>
        <div class="whole-wrap">
            <div class="container box_1170">
                <div className="section-top-border">
                    <h2 className="mb-30 cart-title">Вашата количка 🛒</h2>
                    <div className="progress-table-wrap">
                        <div className="progress-table">
                            <div className="table-head">
                                <div className="serial">#</div>
                                <div className="country">Продукт</div>
                                <div className="visit">Количество</div>
                                <div className="visit">Цена</div>
                                <div className="visit">Общо</div>
                                <div className="percentage">Действия</div>
                            </div>
                            <div className="table-row">
                                <div className="serial">01</div>
                                <div className="country"> <img src="img/burger/1.png" alt="flag" />Блек ангъс бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">19.99</div>
                                <div className="visit">19.99</div>
                                <div className="percentage">
                                    <button className="btn btn-info">Добави още 1</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Премахни</button>
                                </div>
                            </div>
                            <div className="table-row">
                                <div className="serial">02</div>
                                <div className="country"> <img src="img/burger/2.png" alt="flag" />Чедър бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">10.99</div>
                                <div className="visit">10.99</div>
                                <div className="percentage">
                                    <button className="btn btn-info">Добави още 1</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Премахни</button>
                                </div>
                            </div>
                            <div className="table-row">
                                <div className="serial">03</div>
                                <div className="country"> <img src="img/burger/3.png" alt="flag" />Телешки бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">14.99</div>
                                <div className="visit">14.99</div>
                                <div className="percentage">
                                    <button className="btn btn-info">Добави още 1</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Премахни</button>
                                </div>
                            </div>
                            <div className="table-row">
                                <div className="serial">04</div>
                                <div className="country"> <img src="img/burger/4.png" alt="flag" />Зингер бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">11.99</div>
                                <div className="visit">11.99</div>
                                <div className="percentage">
                                    <button className="btn btn-info">Добави още 1</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Премахни</button>
                                </div>
                            </div>
                            <div className="table-row">
                                <div className="serial">05</div>
                                <div className="country"> <img src="img/burger/5.png" alt="flag" />Туна бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">12.99</div>
                                <div className="visit">12.99</div>
                                <div className="percentage">
                                    <button className="btn btn-info">Добави още 1</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Премахни</button>
                                </div>
                            </div>
                            <div className="table-row">
                                <div className="serial">06</div>
                                <div className="country"> <img src="img/burger/6.png" alt="flag" />Рокер бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">13.99</div>
                                <div className="visit">13.99</div>
                                <div className="percentage">
                                    <button className="btn btn-info">Добави още 1</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Премахни</button>
                                </div>
                            </div>
                            <div className="table-row">
                                <div className="serial">07</div>
                                <div className="country"> <img src="img/burger/7.png" alt="flag" />Пушен бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">10.99</div>
                                <div className="visit">10.99</div>
                                <div className="percentage">
                                    <button className="btn btn-info">Добави още 1</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Премахни</button>
                                </div>
                            </div>
                            <div className="table-row">
                                <div className="serial">08</div>
                                <div className="country"> <img src="img/burger/8.png" alt="flag" />Мортадела бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">9.99</div>
                                <div className="visit">9.99</div>
                                <div className="percentage">
                                    <button className="btn btn-info">Добави още 1</button>
                                    &nbsp;
                                    <button className="btn btn-danger">Премахни</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-actions">
                        <h3 className="mb-30 cart-subtitle">Тотал: 105.92лв</h3>
                        &nbsp;
                        &nbsp;
                        <Link to="/order" className="btn btn-success">Направи поръчка</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
};

export default Cart;