import React from 'react';
import '@/styles/postAd.css';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  return (
    <div className="post-ad-header">
      <h2 className="header-heading">
        <FormattedMessage defaultMessage="Post an Ad" id="header.header-ad" />
      </h2>
      <p className="header-text">
        <FormattedMessage
          defaultMessage="Post your Ad for Free in 3 Easy Steps and Get Genuine offers from
        Verified Buyers"
          id="header.post-ad"
        />
      </p>
    </div>
  );
};

export default Header;
