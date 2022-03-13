import React from "react";
import screen from "./assets/screen_mac.png";
import Slider from "./slider/slider";
import PropTypes from "prop-types";

const MockupSlider = ({ sliderData }) => {
    return (
        <div className="w-50 mx-auto" style={{ position: "relative" }}>
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
    }
};
MockupSlider.propTypes = {
    sliderData: PropTypes.array.isRequired
};

export default MockupSlider;
