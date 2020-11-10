/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import {Route, Link} from "react-router-dom";
import routes from "../../states/routes";
import $ from "jquery";

const Header = ({location}) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleFormSearch, setToggleFormSearch] = useState(false);
    return (
        <div className={location.pathname==="/" ? "header-index":"header-index header-page"}>
            <div className={`header-top ${toggleMenu ? "active": ""}`}>
                <div className="bs-container">
                    <div className="top-content">
                        <div className="header-top__left" data-aos="fade-right">
                            <img src="/images/item_phone.png" alt=""/>
                            <span className="phone-number">hotline:1900 2863</span>
                        </div>
                        <div className="header-social" data-aos="fade-left">
                            <div className="search">
                                <input type="text" className="form-search" placeholder="Search..."/>
                                <button className="search__btn" type="button">
                                    <img src="/images/item_search.png" alt=""/>
                                </button>
                            </div>
                            <div className="search-respon" onClick={() => setToggleFormSearch(!toggleFormSearch)}>
                                {toggleFormSearch ? <span className="close__form">x</span> :
                                    <img src="/images/item_search.png" alt=""/>}
                            </div>
                            <div className="social-item item-language">
                                <p className="title">
                                    <img src="/images/layer-3.png" alt="" className="icon"/>
                                    <i className="fas fa-chevron-down"></i>
                                </p>
                                <ul className="social-list">
                                    <li className="social-list__item">
                                        <a href="#" className="social-item__link">
                                            ENG
                                        </a>
                                    </li>
                                    <li className="social-list__item">
                                        <a href="#" className="social-item__link">
                                            VN
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className={`form-search__respon ${toggleFormSearch ? "active" : ""}`}>
                        <input type="text" className="form-search" placeholder="Search..."/>
                        <button className="search__btn" type="button">
                            <img src="/images/item_search.png" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="header-nav" data-aos="fade-up" >
                <div className="bs-container">
                    <div className="nav-content clearfix">
                        <div className="logo" data-aos="fade-down">
                            <Link to="/">
                                <img src="/images/logo.png" alt=""/>
                            </Link>
                        </div>
                        <div className="nav">
              <span className="show__menu"  onClick={() => setToggleMenu(!toggleMenu)}>
                <i className="fas fa-bars"/>
              </span>
                            <div className={`menu ${toggleMenu ? "active" : ""}`}>
                <span className="close__menu">
                  <i
                      className="far fa-window-close"
                      onClick={() => setToggleMenu(false)}
                  />
                </span>
                                <ul className="menu-list clearfix">
                                    {showMenu(routes)}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Header;

// header-top demo data

const MenuLink = ({
                      label,
                      to,
                      activeOnlyWhenExact,
                      icon,
                      scrollTo,
                      childs
                  }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match, history}) => {
                var active = match ? "active" : "";
                return (
                    <li className="menu-list__item" data-aos="fade-down">
                        <Link to={to} className={`menu-list__link ${active}`}>
                            {label}
                        </Link>
                        {childs ? (
                            <ul className="dropdown-list">
                                {
                                    childs.map((item, index) => {
                                        return <Route
                                            key={index}
                                            path={to}
                                            exact={activeOnlyWhenExact}
                                            children={({history}) => {
                                                var activeDropdown = `${to}/${item.path}` === history.location.pathname ? "active" : "";
                                                return (
                                                    <li className="dropdown-list__item" key={index}>
                                                        <Link
                                                            to={`${to}/${item.path}`}
                                                            className={`dropdown-list__link ${activeDropdown}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                );
                                            }}/>
                                    })
                                }
                            </ul>
                        ) : (
                            ""
                        )}
                    </li>
                );
            }}
        />
    );
};

const showMenu = menus => {
    var result = null;
    if (menus.length > 0) {
        result = menus.map((menu, index) => {
            return (
                <MenuLink
                    key={index}
                    label={menu.name}
                    to={menu.path}
                    activeOnlyWhenExact={menu.exact}
                    scrollTo={menu.scrollTo}
                    childs={menu.childs}
                />
            );
        });
    }
    return result;
};
