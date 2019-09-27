
export default (state = {}, action) => {
    let newState;
    const { title, bodyText, upVotes, downVotes, id } = action;

    switch (action.type) {
        case "NEW_POST":
            newState = Object.assign({}, state,
                {
                    [id]: {
                        title: title,
                        bodyText: bodyText,
                        upVotes: upVotes,
                        downVotes: downVotes,
                        id: id
                    }
                });
            return newState;

        default:
            return state;
    }
};