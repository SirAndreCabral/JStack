import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext.jsx";

function Button(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={props.onClick}
      style={{
        color: theme == "dark" ? "white" : "black",
        background: theme == "dark" ? "black" : "white",
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
