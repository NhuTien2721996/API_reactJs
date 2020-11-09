import React from "react";
import {Link} from "react-router-dom";


const SectionAbout = () => {
    return (
        <section className="section section-about">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-about"  data-aos="fade-up">
                            <div className="bs-row row-xs-5 row-sm-10 row-md-15">
                                <div className="bs-col xs-100-5 xs-order-last sm-100-10 sm-order-last md-50-15 lg-50-15">
                                    <div className="module-image">
                                        <img src="images/buniness-home-rev.png" alt=""/>
                                        <span className="layer">
                                              <img src="images/buniness-home-image-5.png" alt=""/>
                                          </span>
                                    </div>
                                </div>
                                <div className="bs-col xs-100-5 sm-100-10 md-50-15 lg-50-15">
                                    <div className="module-text">
                                        <h2 className="title">VỀ CHÚNG TÔI</h2>
                                        <p className="desc">
                                            Scarcely on striking packages by so property in delicate. Up or well must
                                            less rent read walk so be. Easy sold at do hour sing spot. Any meant has
                                            cease too the decay. Since party burst am it match. By or blushes between
                                            besides offices noisier as. Sending do brought winding compass in. Paid day
                                            till shed only fact age its end.
                                        </p>
                                        <Link to="#" className="link-readmore">
                                            Xem thêm
                                            <span className="layer"></span>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            <div className="text">
                                <h1 className="title">ABOUT US</h1>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionAbout;
