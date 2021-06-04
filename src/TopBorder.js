import React from 'react';
import './css/TopBorder.css';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';


function TopBorder() {
  return <div>
    <div className="topBorder">
      {/* <div className="leftSide"></div> */}
      <div className="leftSide">
        <div>
          <a href="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header">
            About
          </a>
        </div>
        <div>
          <a href="https://store.google.com/US/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US">
            Store
          </a>
        </div>
      </div>

      <div className="rightSide">
        <div><a href="https://www.gmail.com">Gmail</a></div>
        <div>
          <a href="https://www.google.com/imghp?hl=en&authuser=0&ogbl">
            Images
          </a>
        </div>
        <div className="appIcon-div">
          <AppsIcon className="apps"/>
        </div>
        <div className="avatarIcon-div">
          <Avatar className="avatar" src="https://ih1.redbubble.net/image.495617057.2511/flat,750x1000,075,f.jpg"/>
        </div>
      </div>

    </div>
  </div>;
}

export default TopBorder;