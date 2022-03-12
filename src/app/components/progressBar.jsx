import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ skills }) => {
    return (
        <div className="d-flex flex-column">
            {skills.map((skill) => (
                <div key={skill.id}>
                    <p className="fw-bold m-0 text-primary fs-6">{`${skill.name}`}</p>
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
            ))}
        </div>
    );
};

ProgressBar.propTypes = {
    skills: PropTypes.array
};

export default ProgressBar;
