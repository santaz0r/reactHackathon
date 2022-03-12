import React from "react";
import Card from "../components/card/card";
import Breadscrumb from "../components/common/breadscrumb";
import team from "../team";

const Favorites = () => {
    const favoriteUsersId = localStorage.getItem("favorite")
        ? localStorage.getItem("favorite")
        : [];
    const favoriteUsers = [];

    for (const userId of favoriteUsersId) {
        for (const user of team) {
            if (user.id === +userId) {
                favoriteUsers.push(user);
            }
        }
    }
    return (
        <>
            <Breadscrumb />
            <h1>Избранные участники</h1>
            <div className="d-flex justify-content-center">
                {favoriteUsers.length > 0 ? (
                    favoriteUsers.map((user) => (
                        <Card key={user.id} {...user} />
                    ))
                ) : (
                    <h1>Вы никого не добавили в избранное</h1>
                )}
            </div>
        </>
    );
};

export default Favorites;
