// main
/** @jsxImportSource @emotion/react */
import React from 'react';

// helpers
import formatName from '../../helpers/formatName';
import typeColor from '../../helpers/typeColor';

const Tags = ({ type = 'type' }) => {
  const breakpoints = [576, 768, 992, 1200];
  const mw = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
  const tags = {
    backgroundColor: typeColor(type),
    height: 35,
    width: 170,
    borderRadius: 25,
    textAlign: 'center',
    lineHeight: '35px',
    fontWeight: 700,
    fontSize: 18,
    boxShadow: '0 0 15px 7px rgba(0,0,0,0.1)',
    textShadow: '0 0 10px rgba(0,0,0,0.8)',
    [mw[3]]: {
      width: 135,
    },
    [mw[1]]: {
      width: 95,
    },
    [mw[0]]: {
      width: 130,
    },
  };

  return <div css={tags}>{formatName(type)}</div>;
};

export default Tags;
