import React from "react";
import { useParams } from "react-router-dom";
import SocialMedia from "../socialMedia/socialMedia";
import Breadscrumb from "../components/common/breadscrumb";
import users from "../team";
import ProgressBarList from "../components/ui/progressBarList";
import { StyleSheet, css } from "aphrodite";
import Badge from "../components/common/badge";
import MockupSlider from "../components/ui/mockupSlider/mockupSlider";
import { Card } from "react-bootstrap";

const Member = () => {
    const { id } = useParams();
    const member = users.find((u) => u.id === Number(id));
    return (
        <>
            <div className="container pt-3 pb-5">
                <div className="row py-3">
                    <Breadscrumb name={member.name} />
                </div>
                <div className="row py-3">
                    <Card>
                        <Card.Body>
                            <header className={css(styles.header)}>
                                <div className={css(styles.avatarWrap)}>
                                    <img
                                        className={css(styles.avatar)}
                                        src={member.photo}
                                        alt="My photo"
                                    />
                                    <div className={css(styles.socialMediaWrap)}>
                                        <SocialMedia
                                            socialMediaList={member.socialMedia}
                                        />
                                    </div>
                                </div>
                                <div className={css(styles.info)}>
                                    <div>
                                        <div className={css(styles.infoBlock)}>
                                            <h5 className={css(styles.center)}>
                                                Имя
                                            </h5>
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
                                            <p
                                                className={css(
                                                    styles.secondaryInfo
                                                )}
                                            >
                                                {member.about}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={css(styles.infoBlock)}>
                                        <h4 className={css(styles.center)}>
                                            Качества
                                        </h4>
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
                                </div>
                            </header>
                        </Card.Body>
                    </Card>
                </div>
                <div className="row py-3">
                    <Card>
                        <Card.Body className="pb-5">
                            <h2 className={css(styles.center)}>Навыки</h2>
                            <ProgressBarList skills={member.skills} />
                        </Card.Body>
                    </Card>
                </div>
                <div className="row py-3">
                    <Card>
                        <Card.Body>
                            <div className={css(styles.margin)}>
                                <h2
                                    className={css([
                                        styles.center,
                                        styles.title
                                    ])}
                                >
                                    Что было выполнено
                                </h2>
                                <ul>
                                    {member.whatDoing.map((task) => (
                                        <li key={task}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="row py-3">
                    <Card>
                        <Card.Body className="pb-5">
                            <h2 className={css([styles.center, styles.title])}>
                                Портфолио
                            </h2>
                            <MockupSlider sliderData={member.sliderData} />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        display: "flex",
        justifyContent: "space-between"
    },
    avatarWrap: {
        width: "40%",
        marginTop: "3rem"
    },
    avatar: {
        display: "block",
        height: "250px",
        borderRadius: "50%",
        margin: "0 auto"
    },
    socialMediaWrap: {
        display: "flex",
        justifyContent: "center",
        marginTop: "1.5rem"
    },
    info: {
        width: "60%",
        marginLeft: "20px",
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
        width: "60%",
        margin: "0 auto",
        justifyContent: "space-around"
    },
    title: {
        marginBottom: "1.5rem"
    }
});

export default Member;
