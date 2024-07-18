import React from "react";
import { Link } from "react-router-dom";

const TopComponent = ({ details }) => {
    return (
        <div className={details.classname}>
            <div className="tag_container">
                <div className="header">
                    <p className="top_header">{details.top_header}</p>
                    <p className="bottom_header">{details.bottom_header}</p>
                </div>
                <div className="to_link">
                    <Link to={details.link_path}>
                        <p className="link_to_path">
                            WATCH ON <span className={`highlight_${details.name}`}>{details.link_name}</span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopComponent;
