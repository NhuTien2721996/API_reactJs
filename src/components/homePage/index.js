import React, {Fragment} from "react";
import {Helmet} from "react-helmet";
import SectionBanner from "./sectionBanner";
import SectionAbout from "./sectionAbout";
import SectionMarket from "./sectionMarket";
import SectionProjects from "./sectionProjects";
import SectionRecruitment from "./sectionRecruitment";
import SectionNews from "./sectionNews";
import SectionPartner from "./sectionPartner";


const HomePage = () => {
    // load when use jquery for template jquery
    // componentWillMount(){
    //     const script1 = document.createElement("script");
    //     script1.src = "src/static/js/jquery-3.2.1.js";
    //     script1.async = true;
    //     const main = document.getElementById("main");
    //     main.insertBefore(newItem, main.childNodes[0]); 
    //   }
    return (
        <Fragment>
            <Helmet>
                <title>Trang chủ</title>
            </Helmet>
            <SectionBanner/>
            <SectionAbout/>
            <SectionMarket/>
            <SectionProjects/>
            <SectionRecruitment/>
            <SectionNews/>
            <SectionPartner/>
        </Fragment>
    );
};

export default HomePage;
