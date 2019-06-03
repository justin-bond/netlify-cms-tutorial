import React from 'react';
import PropTypes from 'prop-types';

const Layout = (props) => {
  const {
    children
  } = props;

const nsBase = 'layout';
const ns = `${nsBase}-default`;

  return (
    <div
      className="hi"
      // onLoad={() => { SmoothScrollInit(window.document); }}
    >
      <div className={`${ns}__header`}>
        <a href="/">Home</a><br />
        Header
      </div>
      <div className={`${ns}__content`}>
        {children}
      </div>
      <div className={`${ns}__footer`}>
        Footer
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {
  children: null
};

export default Layout;