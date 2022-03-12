import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ skills }) => {
    return skills.map((skill) => (
        <div
            className="progress mt-2"
            key={skill.id}
            style={{ height: "25px" }}
        >
            <div
                className={skill.color}
                role="progressbar"
                style={{ width: skill.value + "%" }}
                aria-valuenow={skill.value}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                <p className="fw-bold ms-2 fs-6">{`${skill.name} ${skill.value}%`}</p>
            </div>
        </div>
    ));
};

ProgressBar.propTypes = {
    skills: PropTypes.array
};

export default ProgressBar;
