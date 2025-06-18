import { Link } from "react-router-dom";

const Error404 = () => {
    return <div>
        <div className="bradcam_area breadcam_bg_1 overlay">
            <h3 className="mb-65"style={{ fontWeight: 'bold' }}>ОПА! 🤨</h3>
            <p className="order-confirmation-paragraph mb-30">Страницата, която търсите не беше намерена! </p>
            <iframe title="giphy" src="https://giphy.com/embed/3oEduWOgM2JH2lxH4k" width="480" height="269" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/angrybirds-angry-birds-toons-3oEduWOgM2JH2lxH4k">via GIPHY</a></p>
            <Link to="/" className="boxed-btn3">Начало</Link>
            <Link to="/menu" className="boxed-btn3">Меню</Link> 
        </div>
    </div>
};

export default Error404;