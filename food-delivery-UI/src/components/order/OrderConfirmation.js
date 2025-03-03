import { Link } from "react-router-dom";

const OrderConfirmation = () => {
    return <div>
        <div className="bradcam_area breadcam_bg_1 overlay">
            <h3 className="mb-65"style={{ fontWeight: 'bold' }}>Успешно! ✅</h3>
            <p className="order-confirmation-paragraph">Поръчката ти беше изпратена успешно! </p>
            <p className="order-confirmation-paragraph">Очаквай обаждане от наш куриер в близкия 1 час!</p>
            <p className="order-confirmation-paragraph mb-30">Благодарим ти за доверието!</p>
            <Link to="/" className="boxed-btn3">Начало</Link>
            <Link to="/menu" className="boxed-btn3">Меню</Link> 
        </div>
    </div>
};

export default OrderConfirmation;