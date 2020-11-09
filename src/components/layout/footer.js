import React from 'react';
import {Link} from "react-router-dom";

const Footer = ({location}) => {
    return (
        <div className={location.pathname==="/" ? "footer":"footer footer-page"} data-aos="fade-up">
            <div className="bs-container">
                <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                    <div className="bs-col tn-100-5 xs-100-5 sm-50-10 md-50-15 lg-50-15">
                        <div className="item">
                            <div className="head">
                                <img src="images/logo-footer.png" alt="" className="logo-index"/>
                                <img src="images/logo-footer-page.png" alt="" className="logo-page"/>
                            </div>
                            <p className="desc">
                                ACEFIC5 là Nhà thầu chính thi công tại các dự án lớn tại Hà Nội, Đà Nẵng và nhiều tỉnh
                                thành thành phố trên cả nước. Công ty Cổ phần Đầu tư và Xây dựng ACE5 Thái Bình Dương
                                luôn đáp ứng được các yêu cầu khắt khe của các Chủ đầu tư, luôn đem đến cho khách hàng
                                và xã hội các sản phẩm với chất lượng tốt nhất, tiến độ nhanh nhất mà vẫn đảm bảo tính
                                an toàn và hiệu quả đầu tư trên mỗi công trình....
                            </p>
                        </div>
                    </div>
                    <div className="bs-col tn-100-5 xs-50-5 sm-25-10 md-25-15 lg-25-15">
                        <div className="item-service">
                            <h5 className="title">DỊCH VỤ</h5>
                            <ul className="list">
                                <li className="item-list">
                                    <Link to="#" className="item-list__link">Privacy Policy</Link>
                                </li>
                                <li className="item-list">
                                    <Link to="#" className="item-list__link">Terms and Conditions</Link>
                                </li>
                                <li className="item-list">
                                    <Link to="#" className="item-list__link">Copyright Policy</Link>
                                </li>
                                <li className="item-list">
                                    <Link to="#" className="item-list__link">Code of Conduct</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bs-col tn-100-5 xs-50-5 sm-25-10 md-25-15 lg-25-15">
                        <div className="item-service">
                            <h5 className="title">DỊCH VỤ</h5>
                            <ul className="list">
                                <li className="item-list">
                                    <Link to="#" className="item-list__link">Chemical Engineering Projects</Link>
                                </li>
                                <li className="item-list">
                                    <Link to="#" className="item-list__link">Mining Engineering Construction</Link>
                                </li>
                                <li className="item-list">
                                    <Link to="#" className="item-list__link">Engineering Welding Engineering</Link>
                                </li>
                                <li className="item-list">
                                    <Link to="#" className="item-list__link">Welding Engineering</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    Copyright 2019 Acefic5. All Rights Reserved
                </div>
            </div>
        </div>
    )
};
export default Footer;
