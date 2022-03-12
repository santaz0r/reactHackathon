import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ skill }) => {
    return (
        <div>
            <p className="fw-bold m-0  fs-6">{`${skill.name}`}</p>
            <div className="progress " style={{ height: "25px" }}>
                <div
                    className={skill.color}
                    role="progressbar"
                    style={{ width: skill.value + "%" }}
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <p className="fw-bold  fs-6 text-end">{` ${skill.value}%`}</p>
                </div>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    skill: PropTypes.object
};
export default ProgressBar;
