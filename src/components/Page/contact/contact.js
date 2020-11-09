import React from "react";
import Header from "./header";

const Contact = () => {

    return (
        <div className="page-children">
            <Header/>
            <div className="children-content clearfix">
                <div className="bs-container">
                    <div className="bs-row">
                        <div className="bs-col">
                            <div className="contact-header">
                                <div className="bs-row row-md-15">
                                    <div className="bs-col lg-33-15">
                                        <div className="item-contact">
                                            <div className="item-icon">
                                                <img src="/images/layer-25.png" alt=""/>
                                            </div>
                                            <div className="item-text">
                                                <p className="address">
                                                    Tầng 2, Lô 8 +15 NV, Khu HH1 Ô16 Tây Hồ Tây, P.Xuân La, Q.Tây Hồ,
                                                    TP.Hà Nội.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bs-col lg-33-15">
                                        <div className="item-contact">
                                            <div className="item-icon">
                                                <img src="/images/layer26.png" alt=""/>
                                            </div>
                                            <div className="item-text">
                                                <p className="phone">
                                                    024.6666.7069
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bs-col lg-33-15">
                                        <div className="item-contact">
                                            <div className="item-icon">
                                                <img src="/images/layer27.png" alt=""/>
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
                <div className="contact-content clearfix">
                    <div className="form-content">
                        <div className="form-input">
                            <div className="input-title">
                                <h5 className="title">
                                    Liên hệ
                                </h5>
                                <p className="desc">Cung cấp thông tin để chúng tôi có thể hỗ trợ bạn</p>
                            </div>
                            <form className="input-content">
                                    <div className="bs-row row-md-15">
                                        <div className="bs-col lg-50-15">
                                            <input type="text" className="input-contact" placeholder="Họ và tên"/>
                                        </div>
                                        <div className="bs-col lg-50-15">
                                            <input type="text" className="input-contact" placeholder="Tổ chức"/>
                                        </div>
                                        <div className="bs-col lg-50-15">
                                            <input type="text" className="input-contact" placeholder="Email"/>
                                        </div>
                                        <div className="bs-col lg-50-15">
                                            <input type="text" className="input-contact" placeholder="Số điện thoại"/>
                                        </div>
                                        <div className="bs-col lg-100-15">
                                            <textarea className="input-contact input-textarea" rows="3"
                                                      placeholder="Nội dung"/>
                                        </div>
                                        <div className="bs-col lg-100-15">
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
    );
};

export default Contact;
