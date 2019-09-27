import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";


const Forum = (props) => {
  const sortPostList = (props) => {
    let postListClone = props.postList.slice();
    postListClone.sort(function (a, b) {
      return (b.upVotes - b.downVotes) - (a.upVotes - a.downVotes);
    });
    return postListClone;
  };

  return (
    <div>

      {Object.keys(props.postList).map(function (postId) {
        var post = props.postList[postId];
        return <Post
          title={post.title}
          bodyText={post.bodyText}
          // upVotes={post.upVotes}
          // downVotes={post.downVotes}
          // onUpVote={props.onUpVote}
          // onDownVote={props.onDownVote}
          key={postId}
          postId={postId}
        />
      })}
    </div>
  );
};

Forum.propTypes = {
  postList: PropTypes.object,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func
};

export default Forum;