import React from "react";
import {Link} from "react-router-dom";


const SectionBanner = () => {
    return (
        <div className="section section-banner">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-banner">
                            <div className="module-text" data-aos="fade-right">
                                <h1 className="title">
                                    From concept
                                    to creation.
                                </h1>
                                <p className="desc">
                                    It is a long established fact that a reader will be distracted by the readable
                                    content.
                                </p>
                                <Link to="#" className="link-readmore">
                                    XEM THÊM
                                    <span className="layer">

                                    </span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="module-image">
                <img src="images/image-banner.png" className="image" alt=""/>
            </div>
        </div>
    );
};

export default SectionBanner;
