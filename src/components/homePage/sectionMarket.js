import React, {useState, useEffect} from "react";
import $ from "jquery";


const SectionMarket = () => {
        let count = 0;

        useEffect(() => {
            let listItems = $('.item-content').length;

            setInterval(function () {
                $('.item-content.active').removeClass('active');
                $('.item-content:eq(' + count + ')').addClass('active');

                count += 1;
                if (count >= listItems) {
                    count = 0;
                }
            }, 7000);

            $('.layer-1').mouseover(function () {
                $('.content-4').addClass('active')
                $(this).mouseout(function (){
                    $('.content-4').removeClass('active')
                })
            });
            $('.layer-3').mouseover(function () {
                $('.content-2').addClass('active')
                $(this).mouseout(function (){
                    $('.content-2').removeClass('active')
                })
            });
            $('.layer-4').mouseover(function () {
                $('.content-3').addClass('active')
                $(this).mouseout(function (){
                    $('.content-3').removeClass('active')
                })
            });
            $('.layer-2').mouseover(function () {
                $('.content-1').addClass('active')
                $(this).mouseout(function (){
                    $('.content-1').removeClass('active')
                })
            });

        }, []);
        return (
            <section className="section section-market">
                <div className="bs-container">
                    <div className="bs-row">
                        <div className="bs-col">
                            <div className="module module-market" data-aos="fade-up">
                                <div className="module-header">
                                    <h2 className="title">
                                        LĨNH VỰC HOẠT ĐỘNG
                                    </h2>
                                </div>
                                <div className="module-content">
                                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                                        <div
                                            className="bs-col tn-100-5 xs-100-5 sm-100-10 md-45-15 lg-45-15">
                                            <div className="content__text">
                                                <div className="list__item" data-aos="fade-right">
                                                    <div className="item-header">
                                            <span className="title">
                                                THIẾT KẾ KIẾN TRÚC
                                            </span>
                                                    </div>
                                                    <div className="item-content content-1">
                                                        <p className="desc">
                                                            Scarcely on striking packages by so property in delicate. Up or
                                                            well
                                                            must less rent read walk so be. Easy sold at do hour sing spot.
                                                        </p>
                                                    </div>
                                                    <span className="stt">01</span>
                                                </div>
                                                <div className="list__item" data-aos="fade-right" data-aos-delay="200">
                                                    <div className="item-header">
                                            <span className="title">
                                                THIẾT KẾ KIẾN TRÚC
                                            </span>
                                                    </div>
                                                    <div className="item-content content-2">
                                                        <p className="desc">
                                                            Scarcely on striking packages by so property in delicate. Up or
                                                            well
                                                            must less rent read walk so be. Easy sold at do hour sing spot.
                                                        </p>
                                                    </div>
                                                    <span className="stt">02</span>
                                                </div>
                                                <div className="list__item" data-aos="fade-right" data-aos-delay="300">
                                                    <div className="item-header">
                                            <span className="title">
                                                THIẾT KẾ KIẾN TRÚC
                                            </span>
                                                    </div>
                                                    <div className="item-content content-3">
                                                        <p className="desc">
                                                            Scarcely on striking packages by so property in delicate. Up or
                                                            well
                                                            must less rent read walk so be. Easy sold at do hour sing spot.
                                                        </p>
                                                    </div>
                                                    <span className="stt">03</span>
                                                </div>
                                                <div className="list__item" data-aos="fade-right" data-aos-delay="400">
                                                    <div className="item-header">
                                            <span className="title">
                                                THIẾT KẾ KIẾN TRÚC
                                            </span>
                                                    </div>
                                                    <div className="item-content content-4">
                                                        <p className="desc">
                                                            Scarcely on striking packages by so property in delicate. Up or
                                                            well
                                                            must less rent read walk so be. Easy sold at do hour sing spot.
                                                        </p>
                                                    </div>
                                                    <span className="stt">04</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div
                                            className="bs-col tn-100-5 tn-order-last xs-100-5 xs-order-last sm-100-10 sm-order-last md-55-15 lg-55-15">
                                            <div className="content__image">
                                                <div className="main-content">
                                                    <img src="images/main_round.gif" className="img-main" alt=""/>
                                                    <div className="layout-1">
                                                    <span className="layer-1"><img src="images/layer1.gif"
                                                                                   alt=""/></span>
                                                        <span className="layer-2"><img src="images/layer2.gif"
                                                                                       alt=""/></span>
                                                        <span className="layer-3"><img src="images/layer3.gif"
                                                                                       alt=""/></span>
                                                        <span className="layer-4"><img src="images/layer4.gif"
                                                                                       alt=""/></span>
                                                    </div>
                                                    <div className="layout-2">
                                                        <img src="images/main_center.gif" alt=""/>
                                                        <span className="layer-5"><img src="images/coin.gif" alt=""/></span>
                                                        <span className="layer-6"><img src="images/home.gif" alt=""/></span>
                                                        <span className="layer-7"><img src="images/tree.gif" alt=""/></span>
                                                        <span className="layer-8"><img src="images/tree.gif" alt=""/></span>
                                                        <span className="layer-9"><img src="images/tree.gif" alt=""/></span>
                                                        <span className="layer-10"><img src="images/tower1.gif"
                                                                                        alt=""/></span>
                                                        <span className="layer-11"><img src="images/tower2.gif"
                                                                                        alt=""/></span>
                                                        <span className="layer-12"><img src="images/main_personal4_1.gif"
                                                                                        alt=""/></span>
                                                        <span className="layer-13"><img src="images/main_personal4.gif"
                                                                                        alt=""/></span>
                                                    </div>
                                                    <div className="layout-3">
                                                    <span className="layer-1"><img src="images/layer5.gif"
                                                                                   alt=""/></span>
                                                        <span className="layer-2"><img src="images/layer5_1.gif"
                                                                                       alt=""/></span>
                                                        <span className="layer-3"><img src="images/main_personal2_1.gif"
                                                                                       alt=""/></span>
                                                        <span className="layer-4"><img src="images/main_personal2.gif"
                                                                                       alt=""/></span>
                                                        <span className="layer-5"><img src="images/layer6.gif"
                                                                                       alt=""/></span>
                                                        <span className="layer-6"><img src="images/main_personal3.gif"
                                                                                       alt=""/></span>
                                                        <span className="layer-7"><img src="images/main_personal3_1.gif"
                                                                                       alt=""/></span>
                                                        <span className="layer-8"><img src="images/main_personal.gif"
                                                                                       alt=""/></span>
                                                        <span className="layer-9"><img src="images/tower3.gif"
                                                                                       alt=""/></span>
                                                        <span className="line-1"><img src="images/line1.gif" alt=""/></span>
                                                        <span className="line-2"><img src="images/line2.gif" alt=""/></span>
                                                        <span className="line-3"><img src="images/line3.gif" alt=""/></span>
                                                        <span className="line-4"><img src="images/line4.gif" alt=""/></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h1 className="title">
                                            MARKET
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
;

export default SectionMarket;
