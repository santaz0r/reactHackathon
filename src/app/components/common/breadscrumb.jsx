import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory, useParams } from "react-router-dom";
import { changeText } from "../../utils/changeText";

const Breadscrumb = ({ name }) => {
    const opacity = "text-primary text-opacity-50";
    const { id } = useParams();
    const history = useHistory();
    const link = history.location.pathname.replaceAll("/", "");
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className={`breadcrumb-item ${opacity}`}>
                    <Link to="/">{changeText()}</Link>
                </li>
                {id ? (
                    <li
                        className={`breadcrumb-item active ${opacity} `}
                        aria-current="page"
                    >
                        {changeText(link.slice(0, -id.length))} / {name}
                    </li>
                ) : link !== "" ? (
                    <li
                        className={`breadcrumb-item active ${opacity} `}
                        aria-current="page"
                    >
                        {changeText(link)}
                    </li>
                ) : null}
            </ol>
        </nav>
    );
};

Breadscrumb.propTypes = {
    name: PropTypes.string
};

export default Breadscrumb;
