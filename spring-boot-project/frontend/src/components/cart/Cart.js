import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('products'));
        
        setCartItems(cartItems);
    }, []);
    
    const GetSum = () => cartItems?.reduce((sum, product) =>
            sum + (product.quantity??1)*product.price, 0)

    return <div>
        <div className="bradcam_area breadcam_bg overlay">
            <h3 style={{ fontWeight: 'bold' }}>ПОРЪЧКА</h3>
        </div>
        <div className="whole-wrap">
            <div className="container box_1170">
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
                            {cartItems?.map((product, index)=>(
                                <div className="table-row">
                                    <div className="serial">{(index+1).toString().padStart(2, '0')}</div>
                                    <div className="country"> <img src="img/burger/1.png" alt="flag" />{product.name}</div>
                                    <div className="visit">{product.quantity??1}</div>
                                    <div className="visit">{product.price}</div>
                                    <div className="visit">{product.price*(product.quantity??1)}</div>
                                    <div className="percentage">
                                        <button className="btn btn-info">Добави още 1</button>
                                        &nbsp;
                                        <button className="btn btn-danger">Премахни</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-actions">
                        <h3 className="mb-30 cart-subtitle">Тотал: {GetSum()?.toFixed(2)}лв</h3>
                        &nbsp;
                        &nbsp;
                        <Link to="/order" className="btn btn-success">Направи поръчка</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Cart;