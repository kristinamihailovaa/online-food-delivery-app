import { Link } from "react-router-dom";

const Bestsellers = () => {
    return <div>

        <div className="Burger_President_area">
            <br/>
            <br/>
            <div className="section_title text-center mb-80">
                <span>Нашите бестселъри</span>
            </div>
            <div className="Burger_President_here">
                <div className="single_Burger_President">
                    <div className="room_thumb">

                        <img src="img/burgers/1.png" alt="" />
                        <div className="room_heading d-flex justify-content-between align-items-center">
                            <div className="room_heading_inner">
                                <span>11.99лв</span>
                                <h3>Зингер Бургер</h3>
                                <p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!<br /> от вкусове.</p>
                                <Link to="/menu" className="boxed-btn3">Поръчай сега!</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="single_Burger_President">
                    <div className="room_thumb">
                        <img src="img/burgers/4.png" alt="" />
                        <div className="room_heading d-flex justify-content-between align-items-center">
                            <div className="room_heading_inner">
                                <span>19.99 лв</span>
                                <h3>Блек ангъс</h3>
                                <p>Сочен бургер, приготвен с любов и перфектния баланс от вкусове!<br /> от вкусове.</p>
                                <Link to="/menu" className="boxed-btn3">Поръчай сега!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Bestsellers;