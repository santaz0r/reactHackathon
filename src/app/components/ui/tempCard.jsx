import React from "react";
import { useParams } from "react-router-dom";
import team from "../../team";
import Breadscrumb from "../common/breadscrumb";
const TempCard = () => {
    const { id } = useParams();
    const currentUser = team.find((user) => user.id === +id);
    return (
        <>
            <Breadscrumb {...currentUser} />
            <h1>тут страница участника {id}</h1>
        </>
    );
};

export default TempCard;
