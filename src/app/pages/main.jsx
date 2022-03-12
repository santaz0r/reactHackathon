import React from "react";
import Card from "../components/card/card.jsx";
import team from "../team.js";

const Main = () => {
    return (
        <div className="d-flex justify-content-center">
            {team.map((user) => (
                <Card key={user.id} {...user} />
            ))}
        </div>
    );
};

export default Main;
