import React,{useEffect,useState} from "react";
import Paginator from "../../layout/paginator";
import {useSelector,useDispatch} from "react-redux";
import {getAllNewsRequest} from "../../../states/duck/pages/homePage/action";
import {Link} from "react-router-dom";



const MainContent = () => {
    const listNews=useSelector(state=>state.homePage.news);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllNewsRequest())
    },[]);
    return (
        <div className="main-content">
            <div className="bs-row row-md-15">
                {listNews.map((item,index)=>{
                    return  <div className="bs-col lg-50-15" key={index}>
                        <div className="item">
                            <div className="item-image">
                                <Link to={`/news/${item.id}`} className="link">
                                    <img src={`/images/${item.image}`} alt=""/>
                                    <div className="time">
                                        <p className="date">{item.day}</p>
                                        <p className="month">{item.month}</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="item-text">
                                <div className="item-text__time">
                                    <span className="date"><i className="far fa-clock">{item.date}</i></span>
                                    <span className="view"><i className="far fa-eye"></i>{item.view}</span>
                                </div>
                                <h4 className="title">
                                    {item.title}
                                </h4>
                                <p className="desc">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>

                })}
            </div>

        <Paginator/>
        </div>
    );
};

export default MainContent;
