import { Link } from "react-router-dom";

const ContactInfo = () => {
    return <div>
        <div className="bradcam_area breadcam_bg_2">
            <h3>FOOD HEAVEN - BULGARIA 🍟</h3>
            <br/>
            <Link to="/menu" className="boxed-btn3">Виж менюто</Link>
        </div>
        <section className="contact-section">
            <div className="container">
                <div className="d-none d-sm-block mb-5 pb-4">
                    <div id="map" style={{ height: '480px', position: 'relative', overflow: 'hidden' }}>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93836.37954521114!2d23.241374710168056!3d42.695528666413594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia!5e0!3m2!1sen!2sbg!4v1734683997873!5m2!1sen!2sbg" width="600" height="450" style={{border:'0', width: '100%', height: '100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Свържете се с нас!</h2>
                    </div>
                    <div className="col-lg-8">
                        <form className="form-contact contact_form" action="/" method="post" id="contactForm">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="name" id="name" type="text" placeholder="Име" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="email" id="email" type="email" placeholder="Електронна поща" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control" name="subject" id="subject" type="text" placeholder="Тема" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Съобщение / запитване..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="boxed-btn3">Изпрати</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-home"></i></span>
                            <div className="media-body">
                                <h3>гр. София / България</h3>
                                <p>Бул. България 120</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                            <div className="media-body">
                                <h3>+123 456 7890</h3>
                                <p>Денонощен телефон</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                                <h3>info@foodheaven.com</h3>
                                <p>Пишете ни по всяко време!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
};

export default ContactInfo;