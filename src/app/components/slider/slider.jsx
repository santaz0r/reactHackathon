import React from "react";
import { Carousel } from "react-bootstrap";
// import img1 from "../../assets/tk-portf-1.png";
import SliderItem from "./sliderItem";

const Slider = () => {
    const sliderData = [
        {
            imgSrc: "https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29zdGVubG9zZSUyMGJpbGRlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            title: "Portfolio 1",
            descr: "ggggg"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29zdGVubG9zZSUyMGJpbGRlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            title: "Portfolio 2",
            descr: "ggggg"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29zdGVubG9zZSUyMGJpbGRlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            title: "Portfolio 3",
            descr: "ggggg"
        }
    ];
    console.log({ ...sliderData[0] });
    return (
        <Carousel>
            {sliderData.map((slide, i) => {
                return <SliderItem key={i} imgSrc={slide.imgSrc} title={slide.title} descr={slide.descr} />;
            })}
        </Carousel>
    );
};

export default Slider;
