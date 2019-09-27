import React from "react";
import PropTypes from "prop-types";
import Forum from "./Forum";
import { Link } from "react-router-dom";

const Suggestions = (props) => {
  return ( 
    <div>
      <h2>Suggestions</h2>
      <Link to="/createPost"><button>New Post</button></Link>
      <Forum 
        postList = {props.postList}
        onUpVote = {props.onUpVote}
        onDownVote = {props.onDownVote}
      />
    </div>
  );
};

Suggestions.propTypes = {
  postList: PropTypes.array,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func
};
 
export default Suggestions;