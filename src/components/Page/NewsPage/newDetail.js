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
    },[]);

    return (
        <div className="page-children">
            <Header/>
            <div className="children-content clearfix">
                <div className="bs-container">
                    <div className="bs-row">
                        <div className="bs-col">
                            <div className="main-content main-content__detail">
                                <h5 className="title">
                                    {newDetail.title}
                                </h5>
                                <div className="time">
                                    <span className="date"><i className="far fa-clock">{newDetail.date}</i></span>
                                    <span className="view"><i className="far fa-eye"></i>{newDetail.view}</span>
                                </div>
                                <div className="image">
                                    <img src={`/images/${newDetail.image}`} alt=""/>
                                </div>
                                <p className="desc">
                                    {newDetail.desc}
                                </p>
                            </div>
                            <SideBar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewDetail;
