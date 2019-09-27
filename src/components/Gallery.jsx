import React from "react";
import PropTypes from "prop-types";
import Forum from "./Forum";
import { Link } from "react-router-dom";

const Gallery = (props) => {
  return (
    <div>
      <h2>Gallery</h2>
      <Link to="/post"><button>New Post</button></Link>
      <Forum
        postList={props.postList}
      // onUpVote={props.onUpVote}
      // onDownVote={props.onDownVote}
      />
    </div>
  );
};

Gallery.propTypes = {
  postList: PropTypes.object
  // onUpVote: PropTypes.func,
  // onDownVote: PropTypes.func
};

export default Gallery;