import { useEffect, useState } from "react";
import { getAllOrdersForUser } from "../../services/ordersService";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        getAllOrdersForUser()
        .then((result)=>{
            setOrders(result.data);
        })
    },[])

    return <div>
        <div className="bradcam_area breadcam_bg overlay">
            <h3 style={{ fontWeight: 'bold' }}>ИСТОРИЯ НА ПОРЪЧКИТЕ</h3>
        </div>
        <div className="whole-wrap">
            <div className="container box_1170">
                {orders.map((order)=>(
                    <div className="section-top-border">
                        <h3 className="mb-30 mt-20 cart-title" style={{ fontWeight: 'bold' }}>Поръчка #12345</h3>
                        <h5 className="mb-10 cart-title">Дата: {orders.createdAt} г.</h5>
                        <h5 className="mb-10 cart-title">Статус: {orders.status}</h5>
                        <h5 className="mb-10 cart-title">Тотал: {order.totalAmount}</h5>
                        <div className="progress-table-wrap">
                            <div className="progress-table">
                                <div className="table-head">
                                    <div className="serial">#</div>
                                    <div className="country">Продукт</div>
                                    <div className="visit">Количество</div>
                                    <div className="visit">Цена</div>
                                    <div className="visit">Общо</div>
                                </div>
                                {order.orderedProducts.map((orderItem, index)=>(
                                <div className="table-row">
                                    <div className="serial">{(index+1).toString().padStart(2, '0')}</div>
                                    <div className="country"> <img src={orderItem.item.imageUrl} alt="flag" />{orderItem.item.name}</div>
                                    <div className="visit">{orderItem.quantity}</div>
                                    <div className="visit">{orderItem.item.pice}</div>
                                    <div className="visit">{orderItem.item.name * orderItem.quantity}</div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
};

export default MyOrders;