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
                    <div className="bs-row">
                        <div className="bs-col">
                            <MainContent/>
                            <SideBar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
