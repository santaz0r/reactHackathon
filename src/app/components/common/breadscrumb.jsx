import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory, useParams } from "react-router-dom";

const Breadscrumb = ({ name }) => {
    const { id } = useParams();
    const history = useHistory();
    const link = history.location.pathname.replaceAll("/", "");
    console.log(link);
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                {id ? (
                    <li className="breadcrumb-item active" aria-current="page">
                        {link} {name}
                    </li>
                ) : (
                    <li className="breadcrumb-item active" aria-current="page">
                        {link}
                    </li>
                )}
            </ol>
        </nav>
    );
};

Breadscrumb.propTypes = {
    name: PropTypes.string
};

export default Breadscrumb;
