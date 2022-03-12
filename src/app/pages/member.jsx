import React from "react";
import { useParams } from "react-router-dom";
import SocialMedia from "../socialMedia/socialMedia";
import Breadscrumb from "../components/common/breadscrumb";
import users from "../team";
import ProgressBarList from "../components/ui/progressBarList";
import { StyleSheet, css } from "aphrodite";

const Member = () => {
    const { id } = useParams();
    const member = users.find((u) => u.id === Number(id));
    return (
        <>
            <Breadscrumb name={id} />
            <div className="container">
                <header className={css(styles.header)}>
                    <img
                        className={css(styles.avatar)}
                        src={member.photo}
                        alt="My photo"
                    />
                    <div className={css(styles.info)}>
                        <h4 className={css(styles.center)}>Имя</h4>
                        <p className={css(styles.center)}>{member.name}</p>
                        <h4 className={css(styles.center)}>Возраст:</h4>
                        <p className={css(styles.center)}>{member.age}</p>
                        <h4 className={css(styles.center)}>О себе:</h4>
                        <p className={css(styles.secondaryInfo)}>
                            {member.about}
                        </p>
                        <div className={css([styles.center, styles.margin])}>
                            <SocialMedia socialMediaList={member.socialMedia} />
                        </div>
                    </div>
                </header>
                <ProgressBarList skills={member.skills} />
                <div className={css(styles.margin)}>
                    <h1 className={css(styles.center)}>Что было выполнено</h1>
                    <ul>
                        {member.whatDoing.map((task) => (
                            <li key={task}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        display: "flex"
    },
    avatar: {
        height: "250px",
        borderRadius: "50%"
    },
    info: {
        marginLeft: "20px",
        marginBottom: "20px"
    },
    secondaryInfo: {
        textAlign: "justify"
    },
    center: {
        textAlign: "center"
    },
    margin: {
        marginTop: "20px"
    }
});

export default Member;
