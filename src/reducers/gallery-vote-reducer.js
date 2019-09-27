
export default (state = {}, action) => {
    let newState;
    const { id } = action;

    switch (action.type) {
        case "UPVOTE":
            newState = Object.assign({}, state,
                {

                });
            return newState;

        default:
            return state;
    }
};