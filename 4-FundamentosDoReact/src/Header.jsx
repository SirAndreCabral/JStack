import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  console.log(props);

  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
      <hr />
    </>
  );
};

export default Header;

Header.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
