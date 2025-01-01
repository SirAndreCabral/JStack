import React from "react";
import PropTypes from "prop-types";

import Button from "./Button.jsx";

function PostHeader(props) {
  return (
    <>
      <strong>
        {props.post.read === true ? (
          <s>{props.post.title}</s>
        ) : (
          props.post.title
        )}
      </strong>
      <Button onClick={() => props.onRemove(props.post.id)}>Remover</Button>
    </>
  );
}

export default PostHeader;

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
