import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "./progressBar";

const ProgressBarList = ({ skills }) => {
    return (
        <div className="d-flex flex-column">
            {skills.map((skill) => (
                <ProgressBar key={skill.id} skill={skill} />
            ))}
        </div>
    );
};

ProgressBarList.propTypes = {
    skills: PropTypes.array
};

export default ProgressBarList;
