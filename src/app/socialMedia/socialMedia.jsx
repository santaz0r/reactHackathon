import React from "react";
import PropTypes from "prop-types";
import "./socialMedia.scss";

const SocialMedia = ({ socialMediaList }) => {
    return (
        <div className="wrapper">
            {Object.keys(socialMediaList).map((social) =>
                socialMediaComponent[social](social, socialMediaList[social])
            )}
        </div>
    );
};

const socialMediaComponent = {
    facebook: (key, path) => (
        <a href={path} className="link" key={key}>
            <div className="icon facebook">
                <div className="tooltip">Facebook</div>
                <span>
                    <i className="ri-facebook-fill"></i>
                </span>
            </div>
        </a>
    ),
    twitter: (key, path) => (
        <a href={path} className="link" key={key}>
            <div className="icon twitter">
                <div className="tooltip">Twitter</div>
                <span>
                    <i className="ri-twitter-fill"></i>
                </span>
            </div>
        </a>
    ),
    instagram: (key, path) => (
        <a href={path} className="link" key={key}>
            <div className="icon instagram">
                <div className="tooltip">Instagram</div>
                <span>
                    <i className="ri-instagram-fill"></i>
                </span>
            </div>
        </a>
    ),
    github: (key, path) => (
        <a href={path} className="link" key={key}>
            <div className="icon github">
                <div className="tooltip">Github</div>
                <span>
                    <i className="ri-github-fill"></i>
                </span>
            </div>
        </a>
    ),
    telegram: (key, path) => (
        <a href={path} className="link" key={key}>
            <div className="icon telegram">
                <div className="tooltip">Telegram</div>
                <span>
                    <i className="ri-telegram-fill"></i>
                </span>
            </div>
        </a>
    )
};

SocialMedia.propTypes = {
    socialMediaList: PropTypes.object
};

export default SocialMedia;
