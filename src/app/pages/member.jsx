import React from "react";
import { useParams } from "react-router-dom";
import SocialMedia from "../socialMedia/socialMedia";
import Breadscrumb from "../components/common/breadscrumb";
import users from "../team";
import ProgressBarList from "../components/ui/progressBarList";
import { StyleSheet, css } from "aphrodite";
import Badge from "../components/common/badge";
import MockupSlider from "../components/ui/mockupSlider/mockupSlider";

const Member = () => {
    const { id } = useParams();
    const member = users.find((u) => u.id === Number(id));
    return (
        <>
            <div className="container py-3">
                <div className="row py-3">
                    <Breadscrumb name={member.name} />
                </div>
                <div className="row py-3">
                    <header className={css(styles.header)}>
                        <img
                            className={css(styles.avatar)}
                            src={member.photo}
                            alt="My photo"
                        />
                        <div className={css(styles.info)}>
                            <div>
                                <div className={css(styles.infoBlock)}>
                                    <h5 className={css(styles.center)}>Имя</h5>
                                    <h4 className={css(styles.center)}>
                                        {member.name}
                                    </h4>
                                </div>
                                <div className={css(styles.infoBlock)}>
                                    <h5 className={css(styles.center)}>
                                        Возраст:
                                    </h5>
                                    <h4 className={css(styles.center)}>
                                        {member.age}
                                    </h4>
                                </div>
                                <div className={css(styles.infoBlock)}>
                                    <h4 className={css(styles.center)}>
                                        О себе:
                                    </h4>
                                    <p className={css(styles.secondaryInfo)}>
                                        {member.about}
                                    </p>
                                </div>
                            </div>
                            <div className={css(styles.infoBlock)}>
                                <h4 className={css(styles.center)}>Качества</h4>
                                <div className={css(styles.qualities)}>
                                    {member.qualities.map((q) => (
                                        <Badge
                                            color={q.color}
                                            content={q.content}
                                            key={q.color}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div
                                className={css([styles.center, styles.margin])}
                            >
                                <h4 className={css(styles.center)}>
                                    Социальные сети
                                </h4>
                                <SocialMedia
                                    socialMediaList={member.socialMedia}
                                />
                            </div>
                        </div>
                    </header>
                    <h2 className={css(styles.center)}>Навыки</h2>
                    <ProgressBarList skills={member.skills} />
                </div>
                <div className="row py-3">
                    <div className={css(styles.margin)}>
                        <h2 className={css(styles.center)}>
                            Что было выполнено
                        </h2>
                        <ul>
                            {member.whatDoing.map((task) => (
                                <li key={task}>{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="row py-3">
                    <h2 className={css(styles.center)}>Портфолио</h2>
                    <MockupSlider sliderData={member.sliderData} />
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
        borderRadius: "50%",
        margin: "0 1rem"
    },
    info: {
        marginLeft: "20px",
        marginBottom: "20px",
        padding: "0 2rem"
    },
    infoBlock: {
        marginBottom: "3rem"
    },
    secondaryInfo: {
        textAlign: "justify"
    },
    center: {
        textAlign: "center",
        margin: "1rem 0 1rem"
    },
    margin: {
        marginTop: "20px"
    },
    qualities: {
        display: "flex",
        width: "50%",
        margin: "0 auto",
        justifyContent: "space-around"
    }
});

export default Member;
