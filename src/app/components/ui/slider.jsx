import React from "react";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";

const Slider = ({ data }) => {
    return (
        <div className="container">
            <Carousel>
                {data.map((slide, i) => {
                    return (
                        <Carousel.Item key={`slide-${i}`}>
                            <img
                                className="d-block w-100"
                                src={slide.imgSrc}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{slide.title}</h3>
                                <p>{slide.descr}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};
Slider.defaultProps = {
    data: [{ imgSrc: "", title: "", descr: "" }]
};
Slider.propTypes = {
    data: PropTypes.array.isRequired
};

export default Slider;
