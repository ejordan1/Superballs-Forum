import React from 'react';
import PropTypes from 'prop-types';
import Forum from './Forum';
const Suggestions = (props) => {
    return ( 
        <div>
            <h2>Suggestions</h2>
            <Forum 
            postList = {props.postList}
            onUpVote = {props.onUpVote}
            onDownVote = {props.onDownVote}
            />
        </div>
     );
}

Suggestions.propTypes = {
    postList: PropTypes.array,
    onUpVote: PropTypes.func,
    onDownVote: PropTypes.func
  };
 
export default Suggestions;