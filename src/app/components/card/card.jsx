import React from "react";
import "./card.scss";
import PropTypes from "prop-types";
import Button from "../button";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Badge from "../common/badge";

const Card = ({ id, name, age, photo, about, teamLeader }) => {
    console.log(id);
    console.log(teamLeader);
    const history = useHistory();
    const clickToMemberPage = () => {
        history.push(`/member/${id}`);
    };

    const clickToAddFavorite = () => {
        const favorite = JSON.parse(localStorage.getItem("favorite"));
        console.log(favorite);
        if (!favorite) {
            localStorage.setItem("favorite", `[${id}]`);
            toast.info("Вы добавили в избранное");
        } else {
            if (!favorite.includes(id)) {
                favorite.push(id);
                localStorage.setItem("favorite", JSON.stringify(favorite));
                toast.info("Вы добавили в избранное");
            } else {
                toast.info("Этот человек уже есть в избранном");
            }
        }
    };
    return (
        <div className="myCard">
            <div className="myCard-header">
                <div className="myCard-cover"></div>
                <img className="myCard-avatar" src={photo} alt="avatar" />
                <h1 className="myCard-fullname">
                    {name}{" "}
                    <Badge content="Team leader" teamLeader={teamLeader} />
                </h1>
                <h2 className="myCard-jobtitle">Frontend developer</h2>
            </div>
            <div className="myCard-main">
                <div className="myCard-section" id="about">
                    <div className="myCard-content">
                        <div className="myCard-subtitle">Возраст</div>
                        <p className="myCard-desc">{age}</p>
                        <div className="myCard-subtitle">О себе</div>
                        <p className="myCard-desc">{about}</p>
                    </div>
                </div>
                <div className="myCard-buttons">
                    <Button
                        color="pink"
                        handleClick={clickToMemberPage}
                        name="Страница участника"
                        type="square"
                    />
                    <Button
                        color="pink"
                        handleClick={clickToAddFavorite}
                        name="Добавить в избранное"
                        type="radius"
                    />
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    photo: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    teamLeader: PropTypes.bool.isRequired
};

export default Card;
