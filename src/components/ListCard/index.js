// main
/** @jsxImportSource @emotion/react */
import React from 'react';

const Card = ({ name = 'Pokemon', id = '001', onClick }) => {
  const breakpoints = [576, 768, 992, 1200];
  const mw = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
  const classes = {
    card: {
      width: 'fit-content',
      paddingTop: 100,
      marginBottom: 5,
      position: 'relative',
      boxSizing: 'border-box',
      cursor: 'pointer',
      '&:hover img': {
        animation: 'jump 0.2s',
      },
      [mw[0]]: {
        paddingTop: 60,
      },
    },
    cardInfo: {
      width: 240,
      height: 155,
      backgroundColor: '#343E63',
      borderRadius: 25,
      paddingTop: 100,
      boxSizing: 'border-box',
      textAlign: 'center',
      [mw[0]]: {
        width: 130,
        height: 110,
        paddingTop: 70,
      },
    },
    img: {
      height: 200,
      width: 200,
      objectFit: 'cover',
      objectPosition: 'center',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      filter: 'drop-shadow(5px 10px 10px rgba(0,0,0,0.4))',
      [mw[0]]: {
        width: 130,
        height: 130,
      },
    },
    name: {
      fontSize: 20,
      fontWeight: 400,
      [mw[0]]: {
        fontSize: 14,
      },
    },
    id: {
      color: '#8e9ac4',
      fontSize: 14,
      [mw[0]]: {
        fontSize: 12,
      },
    },
  };

  return (
    <div css={classes.card} onClick={onClick}>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt={name} css={classes.img} />
      <div css={classes.cardInfo}>
        <p css={classes.name}>{name}</p>
        <p css={classes.id}>#{id}</p>
      </div>
    </div>
  );
};

export default Card;
