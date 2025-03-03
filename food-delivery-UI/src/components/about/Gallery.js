import { Link } from "react-router-dom";

const Gallery = () => {
    return <div>
        <div className="gallery_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title mb-70 text-center">
                            <span>Вкусни ястия 24/7</span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="single_gallery big_img">
                <Link className="popup-image" to="/menu">
                    <span className="boxed-btn3" style={{ backgroundColor: 'black' }}>ПОРЪЧАЙ</span>
                </Link>
                <img src="img/gallery/1.png" alt="" />
            </div>
            <div className="single_gallery small_img">
                <Link className="popup-image" to="/menu">
                    <span className="boxed-btn3" style={{ backgroundColor: 'black' }}>ПОРЪЧАЙ</span>
                </Link>
                <img src="img/gallery/2.png" alt="" />
            </div>
            <div className="single_gallery small_img">
                <Link className="popup-image" to="/menu">
                    <span className="boxed-btn3" style={{ backgroundColor: 'black' }}>ПОРЪЧАЙ</span>
                </Link>
                <img src="img/gallery/3.png" alt="" />
            </div>

            <div className="single_gallery small_img">
                <Link className="popup-image" to="/menu">
                    <span className="boxed-btn3" style={{ backgroundColor: 'black' }}>ПОРЪЧАЙ</span>
                </Link>
                <img src="img/gallery/4.png" alt="" />
            </div>
            <div className="single_gallery small_img">
                <Link className="popup-image" to="/menu">
                    <span className="boxed-btn3" style={{ backgroundColor: 'black' }}>ПОРЪЧАЙ</span>
                </Link>
                <img src="img/gallery/5.png" alt="" />
            </div>
            <div className="single_gallery big_img">
                <Link className="popup-image" to="/menu">
                    <span className="boxed-btn3" style={{ backgroundColor: 'black' }}>ПОРЪЧАЙ</span>
                </Link>
                <img src="img/gallery/6.png" alt="" />
            </div>
        </div>
    </div>
};

export default Gallery;