import React from 'react';
import './TopBorder.css';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';


function TopBorder() {
  return <div>
    <div className="topBorder">
      {/* <div className="leftSide"></div> */}
      <div className="rightSide">
        <div>Gmail</div>
        <div>Images</div>
        <AppsIcon />
        <Avatar src="https://ih1.redbubble.net/image.495617057.2511/flat,750x1000,075,f.jpg"/>
      </div>
    </div>
  </div>;
}

export default TopBorder;