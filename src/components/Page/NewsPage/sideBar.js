import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllNewsRequest} from "../../../states/duck/pages/homePage/action";
import {Link} from "react-router-dom";
const SideBar = () => {
    const news=useSelector(state=>state.homePage.news);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllNewsRequest())
    },[]);
    return (
        <div className="sidebar" >
            <div className="form-search">
                <input className="input-search" type="text" placeholder="Tìm kiếm"/>
                <button className="search__btn" type="button">
                    <img src="/images/item_search.png" alt=""/>
                </button>
            </div>
            <div className="hot-news">
                <div className="hot-news__header">
                    <h5 className="title">tin nổi bật</h5>
                </div>
                <div className="hot-news__content">
                    {news.map((item,index)=>{
                        return <div  className="item" key={index} data-aos="fade-left" data-aos-delay="100">
                            <Link to={`/news/${item.id}`} className="link">
                                <div className="item-image">
                                    <img src={`/images/${item.image}`} alt=""/>
                                </div>
                                <div className="item-text">
                                    <h6 className="title">
                                        {item.title}
                                    </h6>
                                    <span className="date"><i className="far fa-clock"></i>{item.date}</span>
                                </div>
                            </Link>

                        </div>
                    })}

                </div>
            </div>
        </div>
    );
};

export default SideBar;
