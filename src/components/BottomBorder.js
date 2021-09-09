import React from 'react';
import '../css/BottomBorder.css';

function BottomBorder() {
  return <div className="bottom-div">

    <div className="leftSide">

        <a href="https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
          Advertising
        </a>

      <a href="https://smallbusiness.withgoogle.com/?subid=us-en-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=us-en_US-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u">
        Business
      </a>
      <a href="https://www.google.com/search/howsearchworks/?fg=1">
        How Search Works
      </a>

    </div>

    <div className="rightSide">
      <a href="https://policies.google.com/privacy?hl=en&fg=1">
        Privacy
      </a>
      <a href="https://policies.google.com/terms?hl=en&fg=1">
        Terms
      </a>
      <a href=" ">
        Settings
      </a>
    </div>

  </div>;
}

export default BottomBorder;