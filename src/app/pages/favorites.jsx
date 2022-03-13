import React, { useEffect, useState } from "react";
import Button from "../components/button";
import Card from "../components/card/card";
import Breadscrumb from "../components/common/breadscrumb";
import { StyleSheet, css } from "aphrodite";
import users from "../team";

const Favorites = () => {
    const [favoriteUsers, setFavoriteUsers] = useState([]);
    const [favoriteUsersId, setFavoriteUsersId] = useState(
        JSON.parse(localStorage.getItem("favorite"))
    );

    useEffect(() => {
        if (favoriteUsersId && favoriteUsersId.length) {
            favoriteUsersId.forEach((f) => {
                setFavoriteUsers((prevState) => [
                    ...prevState,
                    users.find((u) => u.id === f)
                ]);
            });
        }
    }, []);

    const handleDelete = (id) => {
        setFavoriteUsers(favoriteUsers.filter((u) => u.id !== id));
        setFavoriteUsersId(() => {
            const newFav = favoriteUsersId.filter((u) => u !== id);
            localStorage.setItem("favorite", JSON.stringify(newFav));
            return newFav;
        });
    };

    return (
        <>
            <Breadscrumb />

            {favoriteUsers.length > 0 ? (
                <div>
                    <h1 className="text-center">Избранные участники</h1>
                    <div className="d-flex justify-content-center">
                        {favoriteUsers.map((user) => (
                            <div className={css(styles.div)} key={user.id}>
                                <Card {...user} />
                                <div className={css(styles.but)}>
                                    <Button
                                        color="pink"
                                        name="x"
                                        handleClick={() =>
                                            handleDelete(user.id)
                                        }
                                        type="radius"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <h1 className="text-center">
                    Вы никого не добавили в избранное
                </h1>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    div: {
        position: "relative"
    },
    but: {
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1
    }
});

export default Favorites;
