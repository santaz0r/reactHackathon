import React from "react";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";
import "./slider.scss";

const Slider = ({ data, width, height, dark, indicators }) => {
    const mode = dark ? "dark" : "";
    const captionBgColor = dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)";
    return (
        <div className="mx-auto" style={{ width, height }}>
            <Carousel variant={mode} indicators={indicators}>
                {data.map((slide, i) => {
                    return (
                        <Carousel.Item style={{ height }} key={`slide-${i}`}>
                            <div
                                className="w-100 slider-img"
                                style={{
                                    backgroundImage: `url("${slide.imgSrc}")`
                                }}
                            ></div>
                            <Carousel.Caption>
                                <div
                                    className="p-2 rounded-3 w-75 mx-auto"
                                    style={{ background: captionBgColor }}
                                >
                                    <h5 className="mb-0">{slide.title}</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};
Slider.defaultProps = {
    data: [{ imgSrc: "", title: "", descr: "" }],
    width: "100%",
    height: "100%",
    dark: true,
    indicators: true
};
Slider.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    dark: PropTypes.bool,
    indicators: PropTypes.bool
};

export default Slider;
