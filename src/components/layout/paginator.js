import React from "react";
import {Link} from "react-router-dom";


const Paginator = () => {
    return (
        <div className="paginator">
            <div className="button">
                <Link to="#" className="button-control">
                    Prev
                </Link>
            </div>

            <Link to="#" className="page-list">
                <div  className="page">
                    1
                </div>
            </Link>
            <Link to="#" className="page-list">
                <div  className="page">
                    2
                </div>
            </Link>
            <Link to="#" className="page-list">
                <div  className="page">
                   3
                </div>
            </Link>
            <Link to="#" className="page-list">
                <div  className="page">
                    60
                </div>
            </Link>
            <div className="button">
                <Link to="#" className="button-control">
                    Next
                </Link>
            </div>

        </div>
    );
};

export default Paginator;
