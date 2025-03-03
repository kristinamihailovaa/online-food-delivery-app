import { Link } from "react-router-dom";

const Socials = () => {
    return <div>
        <div className="instragram_area">
        <div className="section_title text-center mb-80">
                <span>Последвайте ни в Instagram!</span>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single_instagram">
                            <img src="img/instragram/1.png" alt=""/>
                                <div className="ovrelay">
                                    <Link to="#">
                                        <i className="fa fa-instagram"></i>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single_instagram">
                            <img src="img/instragram/2.png" alt=""/>
                                <div className="ovrelay">
                                    <Link to="#">
                                        <i className="fa fa-instagram"></i>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single_instagram">
                            <img src="img/instragram/3.png" alt=""/>
                                <div className="ovrelay">
                                    <Link to="#">
                                        <i className="fa fa-instagram"></i>
                                    </Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single_instagram">
                            <img src="img/instragram/4.png" alt=""/>
                                <div className="ovrelay">
                                    <Link to="#">
                                        <i className="fa fa-instagram"></i>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Socials;