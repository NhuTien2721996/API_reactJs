import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getAllNewsRequest} from "../../states/duck/pages/homePage/action";

const SectionNews = () => {
    const news = useSelector(state => state.homePage.news);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllNewsRequest());
    }, []);
    return (
        <section className="section section-news">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-news">
                            <div className="module-header" data-aos="fade-up">
                                <h2 className="title">
                                    TIN MỚI NHẤT
                                </h2>
                            </div>
                            <div className="module-content" data-aos="fade-up" data-aos-delay="300">
                                <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                                    {news.length > 0 ?
                                        news.map((item, index) => {
                                            return <div className="bs-col tn-100-5 xs-100-5 sm-50-10 md-33-15 lg-33-15"
                                                        key={index}>
                                                <div className="list__item">

                                                    <div className="item-image">
                                                        <Link to={`news/${item.id}`} className="link">
                                                            <img src={`/images/${item.image}`} alt=""/>
                                                        </Link>
                                                    </div>

                                                    <div className="item-text">
                                                        <div className="header">
                                                            <span className="date"><i
                                                                className="far fa-clock"></i>{item.date}</span>
                                                            <span className="view"><i
                                                                className="far fa-eye"></i>{item.view}</span>
                                                        </div>
                                                        <p className="desc">
                                                            {item.title}
                                                        </p>
                                                        <div className="read-more">
                                                            <Link to="#" className="text">
                                                                Xem thêm
                                                            </Link>
                                                            <Link to="#" className="btn-readmore">
                                                                +
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }) : <div className="list_item">
                                            <p className="mess">Chưa có dữ liệu</p>
                                        </div>
                                    }
                                </div>
                                <div className="button">
                                    <Link to="/news" className="link-readmore">
                                        XEM TIẾP
                                        <span className="layer"></span>
                                    </Link>
                                </div>
                                <div className="text">
                                    <h1 className="title">
                                        LATEST NEWS
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionNews;
