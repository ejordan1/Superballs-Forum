import React from "react";
import v4 from "UUID";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CreatePost = (props) => {
  let _title = null;
  let _bodyText = null;


  function handleNewFormPostSubmission(event) {
    event.preventDefault();
    props.onNewFormPost({ title: _title.value, bodyText: _bodyText.value, upVotes: 0, downVotes: 0, id: v4() });
    _title.value = "";
    _bodyText.value = "";


  }

  return (
    <div>
      <form onSubmit={handleNewFormPostSubmission}>
        <label htmlFor="Title">Title</label>
        <input
          ref={(input) => { _title = input; }}
          id="Title"
          type="text" /><br /><br />
        <label htmlFor="Body">Your Post</label><br />
        <textarea
          ref={(textarea) => { _bodyText = textarea; }}
          id="Body"
          type="text" /><br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <Link to="/"><button>Back</button></Link>
    </div>);
};

CreatePost.propTypes = {
  onNewFormPost: PropTypes.func
};

export default CreatePost;
