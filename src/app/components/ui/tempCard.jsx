import React from "react";
import { useParams } from "react-router-dom";

const TempCard = () => {
    const { id } = useParams();
    return (
        <>
            <h1>тут страница участника {id}</h1>
        </>
    );
};

export default TempCard;
