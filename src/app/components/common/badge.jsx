import React from "react";
import PropTypes from "prop-types";

const Badge = ({ color, content, teamLeader }) => {
    return teamLeader ? (
        <span className={`badge bg-${color} `}>{content}</span>
    ) : null;
};
Badge.defaultProps = {
    color: "primary"
};
Badge.propTypes = {
    color: PropTypes.string,
    content: PropTypes.string,
    teamLeader: PropTypes.bool.isRequired
};
export default Badge;
