import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const Button = ({ color, handleClick, name, type }) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: "transparent",
            border: "none"
        },
        span: {
            display: "inline-block",
            fontSize: "10px",
            fontWeight: 600,
            textTransform: "uppercase",
            width: "100%",
            padding: "10px",
            backgroundColor: color,
            ":hover": {
                color: color,
                backgroundColor: "black"
            }
        },
        radius: {
            borderRadius: "50px"
        },
        round: {
            display: "grid",
            placeItems: "center",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            padding: "5px 12px"
            // fontSize: "0.8rem"
        }
    });
    let classes = null;
    switch (type) {
        case "round":
            classes = [styles.span, styles.round];
            break;
        case "radius":
            classes = [styles.span, styles.radius];
            break;
        default:
            classes = styles.span;
            break;
    }
    return (
        <button className={css(styles.button)} onClick={handleClick}>
            <span className={css(classes)}>{name}</span>
        </button>
    );
};

Button.propTypes = {
    color: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string
};

Button.defaultProps = {
    type: "square"
};

export default Button;
