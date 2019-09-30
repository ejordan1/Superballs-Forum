import React from "react";
import CreatePost from "./CreatePost";
import Gallery from "./Gallery";
import Suggestions from "./Suggestions";
import Issues from "./Issues";
import v4 from "UUID";
import Header from "./Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Switch, Route, withRouter } from "react-router-dom";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.handleNewFormPost = this.handleNewFormPost.bind(this);
  //   this.handleUpVote = this.handleUpVote.bind(this);
  //   this.handleDownVote = this.handleDownVote.bind(this);
  //   this.state = {
  //     postList: [{ title: "first post", bodyText: "first post BLAH BLAH BLAH BLAH BLAH BLAH BLAH", id: v4(), upVotes: 0, downVotes: 0 }]
  //   };
  // }

  // handleNewFormPost(newPost) {
  //   let postListClone = this.state.postList.slice();
  //   postListClone.push(newPost);
  //   this.setState({ postList: postListClone });
  // }

  // getPostFromId(postListClone, idOfPost) {
  //   for (let i = 0; i < postListClone.length; i++) {
  //     if (postListClone[i].id == idOfPost) {
  //       return postListClone[i];
  //     }
  //   }
  //   throw "getPostFromId: Did not find post with given postId";
  // }

  // handleUpVote(postId) {
  //   let postListClone = this.state.postList.slice();
  //   this.getPostFromId(postListClone, postId).upVotes++;
  //   this.setState({ postList: postListClone });
  // }

  // handleDownVote(postId) {
  //   let postListClone = this.state.postList.slice();
  //   this.getPostFromId(postListClone, postId).downVotes++;
  //   this.setState({ postList: postListClone });
  // }

  render() {
    return (
      <div>
        <div>
          <Header />
          <hr />
        </div>
        <Switch>
          <Route exact path='/' render={() => <Gallery postList={this.props.galleryForumList} />} />
          {/* <Route exact path='/suggestions' render={() => <Suggestions postList={this.state.postList} onUpVote={this.handleUpVote} onDownVote={this.handleDownVote} />} />
          <Route exact path='/issues' render={() => <Issues postList={this.state.postList} onUpVote={this.handleUpVote} onDownVote={this.handleDownVote} />} /> */}
          <Route exact path='/post' component={CreatePost} />
          >} />

        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    galleryForumList: state.galleryForumList
  };
};

export default withRouter(connect(mapStateToProps)(App));



/*
when you upvote it would need to know which forum you are upvoting from so it can get the right one and the right id. how to do this?
same thing for making the post


*/