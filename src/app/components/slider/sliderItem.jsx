import React from "react";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";

const SliderItem = (props) => {
    return (
        <>
            <Carousel.Item props={props}>
                <img className="d-block w-100" src={props.imgSrc} alt="First slide" />
                <Carousel.Caption>
                    <h3>{props.title}</h3>
                    <p>{props.descr}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </>
    );
};
SliderItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    descr: PropTypes.string
};

export default SliderItem;
