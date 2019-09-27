import React from "react";
import PropTypes from "prop-types";
import Forum from "./Forum";
import { Link } from "react-router-dom";

const Issues = (props) => {
  return ( 
    <div>
      <h2>Issues</h2>
      <Link to="/post"><button>New Post</button></Link>
      <Forum 
        postList = {props.postList}
        onUpVote = {props.onUpVote}
        onDownVote = {props.onDownVote}
      />
    </div>
  );
};

Issues.propTypes = {
  postList: PropTypes.array,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func
};
 
export default Issues;