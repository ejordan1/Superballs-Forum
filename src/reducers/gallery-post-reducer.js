import c from "./../constants";

export default (state = {}, action) => {
  let newState;
  const { title, bodyText, id } = action;
  //const { title, bodyText, upVotes, downVotes, id } = action;

  switch (action.type) {
  case c.NEW_GALLERY_POST:
    newState = Object.assign({}, state,
      {
        [id]: {
          title: title,
          bodyText: bodyText,
          // upVotes: upVotes,
          // downVotes: downVotes,
          id: id
        }
      });
    return newState;

  default:
    return state;
  }
};