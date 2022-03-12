import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ skills }) => {
    // const myStyle = {
    //     width: "20%"
    // };
    console.log(skills);
    // const completed = 50;
    return skills.map((skill) => (
        <div className="progress mt-2" key={skill.name}>
            <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: skill.value + "%" }}
                aria-valuenow={skill.value}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {skill.name}
            </div>
        </div>
    ));
};

ProgressBar.propTypes = {
    skills: PropTypes.array
};

export default ProgressBar;
