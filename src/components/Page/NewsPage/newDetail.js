import React,{useEffect} from "react";
import Header from "./header";
import SideBar from "./sideBar";
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux";
import {getNewDetailRequest} from "../../../states/duck/pages/newDetail/action";


const NewDetail = () => {
    const match=useParams();
    const dispatch=useDispatch();
    const newDetail=useSelector(state=>state.newsPage);
    useEffect(()=>{
        if (match){
            dispatch(getNewDetailRequest(match.id))
        }
    },[match]);

    return (
        <div className="page-children">
            <Header/>
            <div className="children-content clearfix">
                <div className="bs-container">
                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                        <div className="bs-col tn-100-5 xs-100-5 sm-100-10 md-75-15 lg-75-15">
                            <div className="main-content main-content__detail" data-aos="fade-up" data-aos-delay="200">
                                <h5 className="title">
                                    {newDetail.title}
                                </h5>
                                <div className="time">
                                    <span className="date"><i className="far fa-clock"></i>{newDetail.date}</span>
                                    <span className="view"><i className="far fa-eye"></i>{newDetail.view}</span>
                                </div>
                                <div className="image">
                                    <img src={`/images/${newDetail.image}`} alt=""/>
                                </div>
                                <p className="desc">
                                    {newDetail.desc}
                                </p>
                            </div>
                        </div>
                        <div className="bs-col tn-100-5 xs-100-5 sm-100-10 md-25-15 lg-25-15">
                            <SideBar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewDetail;
