import React from "react";
import Header from "./header";
import MainContent from "./mainContent";
import SideBar from "./sideBar";

const NewsPage = () => {
    return (
        <div className="page-children">
            <Header/>
            <div className="children-content clearfix">
                <div className="bs-container">
                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                        <div className="bs-col tn-100-5 xs-100-5 sm-100-10 md-75-15 lg-75-15">
                            <MainContent/>
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

export default NewsPage;
