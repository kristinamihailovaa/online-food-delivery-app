const MyOrders = () => {
    return <div>
        <div className="bradcam_area breadcam_bg overlay">
            <h3 style={{ fontWeight: 'bold' }}>ИСТОРИЯ НА ПОРЪЧКИТЕ</h3>
        </div>
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
                            </div>
                            <div className="table-row">
                                <div className="serial">01</div>
                                <div className="country"> <img src="img/burger/1.png" alt="flag" />Блек ангъс бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">19.99</div>
                                <div className="visit">19.99</div>
                            </div>
                            <div className="table-row">
                                <div className="serial">02</div>
                                <div className="country"> <img src="img/burger/2.png" alt="flag" />Чедър бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">10.99</div>
                                <div className="visit">10.99</div>
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
                            </div>
                            <div className="table-row">
                                <div className="serial">01</div>
                                <div className="country"> <img src="img/burger/1.png" alt="flag" />Блек ангъс бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">19.99</div>
                                <div className="visit">19.99</div>
                            </div>
                            <div className="table-row">
                                <div className="serial">02</div>
                                <div className="country"> <img src="img/burger/2.png" alt="flag" />Чедър бургер</div>
                                <div className="visit">1</div>
                                <div className="visit">10.99</div>
                                <div className="visit">10.99</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default MyOrders;