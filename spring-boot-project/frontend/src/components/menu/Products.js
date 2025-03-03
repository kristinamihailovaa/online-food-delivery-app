import { Link, useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();

    const confirmDelete = () => {
        window.confirm('Сигурни ли сте, че искате да изтриете посочения продукт?');
        navigate('/menu');
    };

    return <div>
        <div className="bradcam_area breadcam_bg overlay">
            <h3 style={{ fontWeight: 'bold' }}>МЕНЮ</h3>
        </div>

        <div className="best_burgers_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center mb-80">
                            <span>Поръчай сега!</span>
                            <h3>Вкусно, бързо, качествено!</h3>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <aside className="single_sidebar_widget search_widget">
                            <form action="#">
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder='Търси...' />
                                        <div className="input-group-append">
                                            <button className="btn boxed-btn3" style={{ borderRadius: '3px' }} type="button"><i className="ti-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </aside>
                        <br />
                        <br />
                    </div>

                    <div className="col-lg-8">
                        <div className="blog_right_sidebar">
                            <aside className="single_sidebar_widget tag_cloud_widget">
                                <h4 className="widget_title">Избери категория</h4>
                                <ul className="list">
                                    <li>
                                        <Link to="#">Бургери</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Пици</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Месо</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Тортили</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Картофки</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Напитки</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Десерти</Link>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-xl-6 col-md-6 col-lg-6">
                        <div className="single_delicious d-flex align-items-center">
                            <div className="thumb">
                                <img src="img/burger/1.png" alt="" />
                            </div>
                            <div className="info">
                                <h3>Телешки бургер</h3>
                                <p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!</p>
                                <span>
                                    14.99лв
                                    <Link to="/menu" className="boxed-btn3" style={{ fontSize: '14px' }}>Поръчай</Link>
                                </span>
                                <br />
                                <Link to="/admin" className="genric-btn warning radius"><i className="ti-pencil">&nbsp;Редактирай</i></Link>
                                &nbsp;
                                &nbsp;
                                <button className="genric-btn danger radius" onClick={confirmDelete}><i className="ti-trash">&nbsp; Изтрий</i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="single_delicious d-flex align-items-center">
                            <div className="thumb">
                                <img src="img/burger/2.png" alt="" />
                            </div>
                            <div className="info">
                                <h3>Чедър бургер</h3>
                                <p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!</p>
                                <span>
                                    10.99лв
                                    <Link to="/menu" className="boxed-btn3" style={{ fontSize: '14px' }}>Поръчай</Link>
                                </span>
                                <br />
                                <Link to="/admin" className="genric-btn warning radius"><i className="ti-pencil">&nbsp;Редактирай</i></Link>
                                &nbsp;
                                &nbsp;
                                <button className="genric-btn danger radius" onClick={confirmDelete}><i className="ti-trash">&nbsp; Изтрий</i></button>
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
                                <span>
                                    19.99лв
                                    <Link to="/menu" className="boxed-btn3" style={{ fontSize: '14px' }}>Поръчай</Link>
                                </span>
                                <br />
                                <Link to="/admin" className="genric-btn warning radius"><i className="ti-pencil">&nbsp;Редактирай</i></Link>
                                &nbsp;
                                &nbsp;
                                <button className="genric-btn danger radius" onClick={confirmDelete}><i className="ti-trash">&nbsp; Изтрий</i></button>
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
                                <span>
                                    11.99лв
                                    <Link to="/menu" className="boxed-btn3" style={{ fontSize: '14px' }}>Поръчай</Link>
                                </span>
                                <br />
                                <Link to="/admin" className="genric-btn warning radius"><i className="ti-pencil">&nbsp;Редактирай</i></Link>
                                &nbsp;
                                &nbsp;
                                <button className="genric-btn danger radius" onClick={confirmDelete}><i className="ti-trash">&nbsp; Изтрий</i></button>
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
                                <span>
                                    12.99лв
                                    <Link to="/menu" className="boxed-btn3" style={{ fontSize: '14px' }}>Поръчай</Link>
                                </span>
                                <br />
                                <Link to="/admin" className="genric-btn warning radius"><i className="ti-pencil">&nbsp;Редактирай</i></Link>
                                &nbsp;
                                &nbsp;
                                <button className="genric-btn danger radius" onClick={confirmDelete}><i className="ti-trash">&nbsp; Изтрий</i></button>
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
                                <span>
                                    13.99лв
                                    <Link to="/menu" className="boxed-btn3" style={{ fontSize: '14px' }}>Поръчай</Link>
                                </span>
                                <br />
                                <Link to="/admin" className="genric-btn warning radius"><i className="ti-pencil">&nbsp;Редактирай</i></Link>
                                &nbsp;
                                &nbsp;
                                <button className="genric-btn danger radius" onClick={confirmDelete}><i className="ti-trash">&nbsp; Изтрий</i></button>
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
                                <span>
                                    10.99лв
                                    <Link to="/menu" className="boxed-btn3" style={{ fontSize: '14px' }}>Поръчай</Link>
                                </span>
                                <br />
                                <Link to="/admin" className="genric-btn warning radius"><i className="ti-pencil">&nbsp;Редактирай</i></Link>
                                &nbsp;
                                &nbsp;
                                <button className="genric-btn danger radius" onClick={confirmDelete}><i className="ti-trash">&nbsp; Изтрий</i></button>
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
                                <span>
                                    9.99лв
                                    <Link to="/menu" className="boxed-btn3" style={{ fontSize: '14px' }}>Поръчай</Link>
                                </span>
                                <br />
                                <Link to="/admin" className="genric-btn warning radius"><i className="ti-pencil">&nbsp;Редактирай</i></Link>
                                &nbsp;
                                &nbsp;
                                <button className="genric-btn danger radius" onClick={confirmDelete}><i className="ti-trash">&nbsp; Изтрий</i></button>
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
};

export default Products;