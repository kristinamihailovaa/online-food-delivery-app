import { Link } from "react-router-dom";

const Carousel = () => {
    return <div>
        <div className="slider_area">
            <div className="slider_active owl-carousel">
                <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-9 col-md-9 col-md-12">
                                <div className="slider_text text-center">
                                    <div className="deal_text">
                                        <span><Link to="/menu">Food Heaven</Link></span>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <h4>Вкусни</h4>
                                    <h4>Изкушения</h4>
                                    <br />
                                    <br />
                                    <Link to="/menu" className="boxed-btn3">Виж менюто</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Carousel;