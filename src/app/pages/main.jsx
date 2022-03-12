import React from "react";
import Slider from "../components/slider/slider.jsx";
import team from "../team.js";

const Main = () => {
    return (
        <>
            <ul className="d-flex justify-content-center">
                {team.map((user) => (
                    <div key={user.id}>
                        <img
                            src="https://miro.medium.com/max/512/1*jA5lTgPRbyimsFNod7SlFQ.png"
                            alt="image"
                        ></img>
                        <li>
                            <h3>{user.name}</h3>
                        </li>
                        <button className="btn btn-primary m-2">
                            Открыть карточку
                        </button>
                        <h4>Немного об участнике: {user.description}</h4>
                    </div>
                ))}
            </ul>
            <div className="container">
                <Slider />
            </div>
        </>
    );
};

export default Main;
