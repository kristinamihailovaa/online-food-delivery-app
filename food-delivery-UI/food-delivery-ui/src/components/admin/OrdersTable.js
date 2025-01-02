import { Link } from "react-router-dom";

const OrdersTable = () => {
    return <div>
        <div className="whole-wrap">
            <div className="container box_1170">
                <div className="section-top-border">
                    <h3 className="mb-30 mt-20 cart-title" style={{ fontWeight: 'bold' }}>Поръчка #12345</h3>
                    <h5 className="mb-10 cart-title">Дата: 23.08.2024 г.</h5>
                    <h5 className="mb-10 cart-title">Статус: Приключена</h5>
                    <h5 className="mb-10 cart-title">Тотал: 30.98 лв</h5>
                    <div className="progress-table-wrap">
                        <div className="progress-table">
                            <div className="table-head">
                                <div className="serial">#</div>
                                <div className="country">Продукт</div>
                                <div className="visit">Количество</div>
                                <div className="visit">Цена</div>
                                <div className="visit">Общо</div>
                                <div className="visit">Статус</div>
                                <div className="visit">Действия</div>
                            </div>
                            <div className="table-row">
                                <div className="serial">01</div>
                                <div className="country"><img src="img/burger/1.png" alt="flag" />Блек ангъс бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">19.99</div>
                                <div className="visit">19.99</div>
                                <div className="visit">
                                    <div className="input-group-icon ">
                                        <div className="default-select" id="default-select">
                                            <select className="nice-select  status-select">
                                                <option className="list option" value=" 1">Нова</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">В обработка</option>
                                                <option className="list option" value="1">Изпратена</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">Приключена</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="visit">
                                    <button className="btn btn-success">Запази</button>
                                </div>
                            </div>
                            <div className="table-row">
                                <div className="serial">02</div>
                                <div className="country"> <img src="img/burger/2.png" alt="flag" />Чедър бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">10.99</div>
                                <div className="visit">10.99</div>
                                <div className="visit">
                                    <div className="input-group-icon ">
                                        <div className="default-select" id="default-select">
                                            <select className="nice-select  status-select">
                                                <option className="list option" value=" 1">Нова</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">В обработка</option>
                                                <option className="list option" value="1">Изпратена</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">Приключена</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="visit">
                                    <button className="btn btn-success">Запази</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-top-border">
                    <h3 className="mb-30 mt-20 cart-title" style={{ fontWeight: 'bold' }}>Поръчка #54321</h3>
                    <h5 className="mb-10 cart-title">Дата: 15.11.2024 г.</h5>
                    <h5 className="mb-10 cart-title">Статус: Приключена</h5>
                    <h5 className="mb-10 cart-title">Тотал: 30.98 лв</h5>
                    <div className="progress-table-wrap">
                        <div className="progress-table">
                            <div className="table-head">
                                <div className="serial">#</div>
                                <div className="country">Продукт</div>
                                <div className="visit">Количество</div>
                                <div className="visit">Цена</div>
                                <div className="visit">Общо</div>
                                <div className="visit">Статус</div>
                                <div className="visit">Действия</div>
                            </div>
                            <div className="table-row">
                                <div className="serial">01</div>
                                <div className="country"> <img src="img/burger/1.png" alt="flag" />Блек ангъс бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">19.99</div>
                                <div className="visit">19.99</div>
                                <div className="visit">
                                    <div className="input-group-icon ">
                                        <div className="default-select" id="default-select">
                                            <select className="nice-select  status-select">
                                                <option className="list option" value=" 1">Нова</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">В обработка</option>
                                                <option className="list option" value="1">Изпратена</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">Приключена</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="visit">
                                    <button className="btn btn-success">Запази</button>
                                </div>
                            </div>
                            <div className="table-row">
                                <div className="serial">02</div>
                                <div className="country"> <img src="img/burger/2.png" alt="flag" />Чедър бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">10.99</div>
                                <div className="visit">10.99</div>
                                <div className="visit">
                                    <div className="input-group-icon ">
                                        <div className="default-select" id="default-select">
                                            <select className="nice-select  status-select">
                                                <option className="list option" value=" 1">Нова</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">В обработка</option>
                                                <option className="list option" value="1">Изпратена</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">Приключена</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="visit">
                                    <button className="btn btn-success">Запази</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-top-border">
                    <h3 className="mb-30 mt-20 cart-title" style={{ fontWeight: 'bold' }}>Поръчка #33344</h3>
                    <h5 className="mb-10 cart-title">Дата: 15.11.2024 г.</h5>
                    <h5 className="mb-10 cart-title">Статус: Приключена</h5>
                    <h5 className="mb-10 cart-title">Тотал: 30.98 лв</h5>
                    <div className="progress-table-wrap">
                        <div className="progress-table">
                            <div className="table-head">
                                <div className="serial">#</div>
                                <div className="country">Продукт</div>
                                <div className="visit">Количество</div>
                                <div className="visit">Цена</div>
                                <div className="visit">Общо</div>
                                <div className="visit">Статус</div>
                                <div className="visit">Действия</div>
                            </div>
                            <div className="table-row">
                                <div className="serial">01</div>
                                <div className="country"> <img src="img/burger/1.png" alt="flag" />Блек ангъс бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">19.99</div>
                                <div className="visit">19.99</div>
                                <div className="visit">
                                    <div className="input-group-icon ">
                                        <div className="default-select" id="default-select">
                                            <select className="nice-select  status-select">
                                                <option className="list option" value=" 1">Нова</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">В обработка</option>
                                                <option className="list option" value="1">Изпратена</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">Приключена</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="visit">
                                    <button className="btn btn-success">Запази</button>
                                </div>
                            </div>
                            <div className="table-row">
                                <div className="serial">02</div>
                                <div className="country"> <img src="img/burger/2.png" alt="flag" />Чедър бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">10.99</div>
                                <div className="visit">10.99</div>
                                <div className="visit">
                                    <div className="input-group-icon ">
                                        <div className="default-select" id="default-select">
                                            <select className="nice-select status-select">
                                                <option className="list option" value=" 1">Нова</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">В обработка</option>
                                                <option className="list option" value="1">Изпратена</option>
                                                <option className="list option" value="1">Получена</option>
                                                <option className="list option" value="1">Приключена</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="visit">
                                    <button className="btn btn-success">Запази</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="blog-pagination justify-content-center d-flex">
                    <ul className="pagination">
                        <li className="page-item">
                            <Link to="/menu" className="boxed-btn3" aria-label="Previous">
                                <i className="ti-angle-left"></i>
                            </Link>
                        </li>
                        <li className="page-item">
                            <Link to="/menu" className="boxed-btn3">1</Link>
                        </li>
                        <li className="page-item active">
                            <Link to="/menu" className="boxed-btn3">2</Link>
                        </li>
                        <li className="page-item active">
                            <Link to="/menu" className="boxed-btn3">3</Link>
                        </li>
                        <li className="page-item active">
                            <Link to="/menu" className="boxed-btn3">4</Link>
                        </li>
                        <li className="page-item">
                            <Link to="/menu" className="boxed-btn3" aria-label="Next">
                                <i className="ti-angle-right"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
};

export default OrdersTable;