import React from "react";
import {Link} from "react-router-dom";

const Contact = () => {

    return (
        <div className="page-children">
            <div className="children-header" data-aos="fade-up">
                <div className="bs-container">
                    <div className="bs-row">
                        <div className="bs-col">
                            <h3 className="title">Liên hệ</h3>
                            <Link to="/" className="link">
                                Trang chủ
                            </Link>
                            <Link to="/news" className="link">
                                / Liên hệ
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="children-content children-content__contact clearfix">
                <div className="bs-container">
                    <div className="bs-row">
                        <div className="bs-col">
                            <div className="contact-header">
                                <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                                    <div className="bs-col tn-100-5 xs-100-5 sm-50-10 md-33-15 lg-33-15">
                                        <div className="item-contact clearfix" data-aos="fade-left">
                                            <div className="item-icon">
                                                <img src="/images/layer-25.png" alt="" className="icon"/>
                                                <img src="/images/layer-25-hover.png" alt="" className="icon icon-hover"/>
                                            </div>
                                            <div className="item-text">
                                                <p className="address">
                                                    Tầng 2, Lô 8 +15 NV, Khu HH1 Ô16 Tây Hồ Tây, P.Xuân La, Q.Tây Hồ,
                                                    TP.Hà Nội.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bs-col tn-100-5 xs-100-5 sm-50-10 md-33-15 lg-33-15">
                                        <div className="item-contact clearfix" data-aos="fade-left" data-aos-delay="200">
                                            <div className="item-icon">
                                                <img src="/images/layer26.png" alt="" className="icon"/>
                                                <img src="/images/layer26-hover.png" alt="" className="icon icon-hover"/>
                                            </div>
                                            <div className="item-text">
                                                <p className="phone">
                                                    024.6666.7069
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bs-col tn-100-5 xs-100-5 sm-50-10 md-33-15 lg-33-15">
                                        <div className="item-contact clearfix" data-aos="fade-left" data-aos-delay="400">
                                            <div className="item-icon">
                                                <img src="/images/layer27.png" alt="" className="icon"/>
                                                <img src="/images/layer27-hover.png" alt="" className="icon icon-hover"/>
                                            </div>
                                            <div className="item-text">
                                                <p className="mail">
                                                    vanphongace5.ace@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-content clearfix" data-aos="fade-up" data-aos-delay="600">
                    <div className="bs-container">
                        <div className="bs-row row-xs-5 row-sm-10 row-md-15">
                            <div className="bs-col xs-100-5 xs-order-last sm-50-10 md-50-15 lg-50-15">
                            </div>
                            <div className="bs-col xs-100-5 sm-50-10 md-50-15 lg-50-15">
                                <div className="form-content">
                                    <div className="form-input">
                                        <div className="input-title">
                                            <h5 className="title">
                                                Liên hệ
                                            </h5>
                                            <p className="desc">Cung cấp thông tin để chúng tôi có thể hỗ trợ bạn</p>
                                        </div>
                                        <form className="input-content">
                                            <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                                                <div className="bs-col tn-100-5 xs-50-5 sm-100-10 md-50-15 lg-50-15">
                                                    <input type="text" className="input-contact" placeholder="Họ và tên"/>
                                                </div>
                                                <div className="bs-col tn-100-5 xs-50-5 sm-100-10 md-50-15 lg-50-15">
                                                    <input type="text" className="input-contact" placeholder="Tổ chức"/>
                                                </div>
                                                <div className="bs-col tn-100-5 xs-50-5 sm-100-10 md-50-15 lg-50-15">
                                                    <input type="text" className="input-contact" placeholder="Email"/>
                                                </div>
                                                <div className="bs-col tn-100-5 xs-50-5 sm-100-10 md-50-15 lg-50-15">
                                                    <input type="text" className="input-contact" placeholder="Số điện thoại"/>
                                                </div>
                                                <div className="bs-col tn-100-5 xs-100-5 sm-100-10 md-100-15 lg-100-15">
                                            <textarea className="input-contact input-textarea" rows="3"
                                                      placeholder="Nội dung"/>
                                                </div>
                                                <div className="bs-col tn-100-5 xs-100-5 sm-100-10 md-100-15 lg-100-15">
                                                    <button type="button" className="btn btn-send">
                                                        gửi tin
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="google-map-code">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4705722549797!2d105.76771451420224!3d21.01384918600644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453578a0a260b%3A0xeac7a8dadbb686b8!2zMjEgTMOqIFF1YW5nIMSQ4bqhbywgTeG7hSBUcsOsLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1604930533852!5m2!1svi!2s"
                            width="100%" height="100%" frameBorder="0" style={{border: 0}} allowFullScreen=""
                            aria-hidden="false" tabIndex="0">
                        </iframe>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
