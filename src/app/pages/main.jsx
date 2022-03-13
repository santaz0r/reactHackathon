import React from "react";
import Card from "../components/card/card.jsx";
import Breadscrumb from "../components/common/breadscrumb.jsx";
import team from "../team.js";

const Main = () => {
    return (
        <div className="container py-3">
            <div className="row py-3">
                <Breadscrumb />
            </div>
            <div className="row py-3">
                <div className="d-flex justify-content-center">
                    {team.map((user) => (
                        <Card key={user.id} {...user} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
