import React from "react";
import {BsSlide} from "../../bases/shared";
import {Link} from "react-router-dom";


const SectionPartner= () => {
    return (
        <section className="section section-partner">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-partner" data-aos="fade-down" data-aos-delay="500">
                            <div className="module-header">
                                <h4 className="title">
                                    ĐỐI TÁC KHÁCH HÀNG
                                </h4>
                            </div>
                            <div className="module-content">
                                <SlidePartner/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
var slideSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    centerPadding: "0",
    dots: false,
    fade: false,
    autoplay: true,
    infinite: true,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    swipe: false,
    // nextArrowSetting: {
    //     label: "next page1",
    //     className: "list__control next__btn"
    // },
    // prevArrowSetting: {
    //     label: "prev page1",
    //     className: "list__control prev__btn"
    // },
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const SlidePartner = () => {
    return (
        <BsSlide {...slideSettings}>
        <div className="item">
            <Link to="#" className="link">
                <img src="images/logo-vin.png" alt=""/>
            </Link>
        </div>
            <div className="item">
                <Link to="#" className="link">
                    <img src="images/logo-lanmak.png" alt=""/>
                </Link>
            </div>
            <div className="item">
                <Link to="#" className="link">
                    <img src="images/logo-han.png" alt=""/>
                </Link>
            </div>
            <div className="item">
                <Link to="#" className="link">
                    <img src="images/logo-han.png" alt=""/>
                </Link>
            </div>
        </BsSlide>
    );
};

export default SectionPartner;
