import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const Button = ({ color, handleClick, name, type }) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: "transparent",
            border: "none",
            minWidth: "150px"
        },
        span: {
            display: "inline-block",
            fontSize: "10px",
            fontWeight: 600,
            textTransform: "uppercase",
            borderRadius: type === "radius" ? "50px" : "0",
            width: "100%",
            padding: "10px",
            backgroundColor: color,
            ":hover": {
                color: color,
                backgroundColor: "black"
            }
        }
    });
    return (
        <button className={css(styles.button)} onClick={handleClick}>
            <span className={css(styles.span)}>{name}</span>
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
