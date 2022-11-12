// main
/** @jsxImportSource @emotion/react */
import React from 'react';

const Container = ({ children, paddingBottom = '150px', style }) => {
  const breakpoints = [576, 768, 992, 1200];
  const mw = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
  const container = {
    width: 1000,
    margin: '0 auto',
    padding: `40px 0 ${paddingBottom}`,
    boxSizing: 'border-box',
    [mw[3]]: {
      width: 740,
    },
    [mw[1]]: {
      width: 490,
    },
    [mw[0]]: {
      width: '100%',
      padding: `20px 20px ${paddingBottom}`,
    },
  };

  return (
    <div css={container} style={style}>
      {children}
    </div>
  );
};

export default Container;
