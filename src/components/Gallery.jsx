import React from 'react';
import PropTypes from 'prop-types';
import Forum from './Forum';
const Gallery = (props) => {
    return ( 
        <div>
            <h2>Gallery</h2>
            <Forum 
            postList = {props.postList}
            onUpVote = {props.onUpVote}
            onDownVote = {props.onDownVote}
            />
        </div>
     );
}

Gallery.propTypes = {
    postList: PropTypes.array,
    onUpVote: PropTypes.func,
    onDownVote: PropTypes.func
  };
 
export default Gallery;