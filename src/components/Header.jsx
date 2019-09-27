import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return ( <div>
    <h2>Superballs Forum</h2>
    <div>
            
      <Link to="/">Home</Link> | <Link to="/suggestions">Suggestions</Link> | <Link to="/issues">Issues</Link> 
    </div>
  </div> );
};
 
export default Header;