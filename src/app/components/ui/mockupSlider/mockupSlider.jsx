import React from "react";
import screen from "./screen_mac.png";
import Slider from "./slider/slider";
import PropTypes from "prop-types";

const MockupSlider = ({ sliderData, width }) => {
    return (
        <div className="mx-auto" style={{ position: "relative", width }}>
            <img className="w-100" src={screen} />
            <div
                style={{
                    position: "absolute",
                    top: "6%",
                    left: "11%",
                    width: "78%",
                    height: "84%"
                }}
            >
                <Slider data={sliderData} dark={true} indicators={true} />
            </div>
        </div>
    );
};
MockupSlider.defaultProps = {
    sliderData: {
        imgSrc: "",
        title: ""
    },
    width: "75%"
};
MockupSlider.propTypes = {
    sliderData: PropTypes.array.isRequired,
    width: PropTypes.string
};

export default MockupSlider;
