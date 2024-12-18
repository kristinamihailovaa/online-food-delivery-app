import { Link } from "react-router-dom";

const Info = () => {
    return <div>
        <div className="bradcam_area breadcam_bg_1 overlay">
            <h3>FOOD HEAVEN - BULGARIA 🍟</h3>
            <br/>
            <Link to="/menu" className="boxed-btn3">Виж менюто</Link>
        </div>
        <div className="about_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="about_thumb2">
                            <div className="img_1">
                                <img src="img/about/3.jpeg" alt="" />
                            </div>
                            <div className="img_2">
                                <img src="img/logo.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 offset-lg-1 col-md-6">
                        <div className="about_info">
                            <div className="section_title mb-20px">
                                <span>За нас</span>
                                <h3>Food Heaven - вкус & удобство</h3>
                            </div>
                            <p>Добре дошли в Food Heaven – мястото, където вкусът среща удобството! Ние сме вашият рай за бърза и качествена доставка на любимата ви храна – от сочни бургери и хрупкави пържени картофки до свежи салати и апетитни десерти. С нас получавате не само вкусно изживяване, но и гаранция за бързина и качество, защото знаем, че времето ви е ценно. Food Heaven – доставяме щастието директно до вашата врата!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Info;