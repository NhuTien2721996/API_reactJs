import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AOS from "aos";
import Header from "./header";
import Footer from "./footer";
import routes from "./../../states/routes";
import $ from "jquery";
import BackTop from "./backTop";
import NewDetail from "../Page/NewsPage/newDetail";
import ScrollTop from "./scrollTop";


const Layout = () => {


    useEffect(() => {
        AOS.init({
            duration: 500,
            offset: 0,
            delay: 0,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });

        if ($(this).scrollTop() >= 42) {
            $(".header-nav").addClass("scrolled");
        } else {
            $(".header-nav").removeClass("scrolled");
        }
        $(window).on("load", function () {
            if ($(this).scrollTop() >= 42) {
                $(".header-nav").addClass("scrolled");
            } else {
                $(".header-nav").removeClass("scrolled");
            }
        });
        $(document).scroll(function () {
            if ($("#main").offset() && $(this).scrollTop() >= $("#main").offset().top) {
                $(".back-top").addClass("active");
            } else {
                $(".back-top").removeClass("active");
            }
            if ($(this).scrollTop() > 42) {
                $(".header-index").addClass("scrolled");
            } else {
                $(".header-index").removeClass("scrolled");
            }
        });
        $(".back-top").on("click", function () {
            $(".back-top").removeClass("active");
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });
    }, []);
    return (
        < Router>
            <ScrollTop/>
            <Route
                children={({location}) => <Header location={location}/>}
            />
            < Switch>
                {showRoutes(routes)}
                <Route path="/news/:id"
                       exact={false}>
                    <NewDetail/>
                </Route>
            </Switch>
            <BackTop/>
            <Route
                children={({location}) => <Footer location={location}/>}
            />

        </Router>


    );
}
export default Layout;


const showRoutes = routes => {
    let result = null;
    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (!route.childs ? (
                    <Route
                        path={route.path}
                        component={route.main}
                        key={index}
                        exact={route.exact}
                    />
                ) : (
                    route.childs.map((routeChildren, index) => {
                        return (
                            <Route
                                path={`${route.path}/${routeChildren.path}`}
                                component={routeChildren.main}
                                key={index}
                                exact={routeChildren.exact}
                            />
                        )
                    })
                )
            )
        })
    }
    return result;
}
