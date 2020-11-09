import React from "react";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="children-header">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <h3 className="title">Tin tức</h3>
                        <Link to="/" className="link">
                            Trang chủ
                        </Link>
                        <Link to="/news" className="link">
                            / Liên hệ
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
