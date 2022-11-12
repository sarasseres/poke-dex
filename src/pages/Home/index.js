// main
/** @jsxImportSource @emotion/react */
import React from 'react';

import { useHistory } from 'react-router-dom';

// libraries
import { DoubleArrowRounded } from '@material-ui/icons';

// components
import Button from '../../components/Button';

// assets
import cover from '../../assets/images/pikachu-cover.png';

const Home = () => {
  const breakpoints = [576, 768, 992, 1200];
  const breakpointsHeight = [650, 730];
  const mw = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
  const mh = breakpointsHeight.map((bp) => `@media (min-height: ${bp}px)`);
  const classes = {
    home: {
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: 'rgb(240, 238, 238)',
      position: 'relative',
    },
    container: {
      backgroundColor: '#2A3050',
      position: 'absolute',
      top: 150,
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: '100%/100px 100px 0 0',
      padding: '50px 0 80px',
    },
    center: {
      display: 'flex',
      paddingTop: 80,
      [mw[2]]: {
        flexDirection: 'column',
        paddingTop: 30,
        height: '100%',
      },
      [mw[0]]: {
        paddingTop: 0,
      },
    },
    cover: {
      position: 'absolute',
      zIndex: 1,
      width: 200,
      top: 10,
      transform: 'rotate(-10deg)',
      [mw[2]]: {
        width: 180,
        top: 20,
      },
      [mw[0]]: {
        width: 180,
        top: 13,
        transform: 'rotate(-13deg)',
      },
    },
    button: {
      position: 'absolute',
      bottom: 0,
      left: 300,
      width: '100%',
      '& .MuiButtonBase-root': {
        [mw[0]]: {
          width: '100%',
        },
        '& .MuiButton-label': {
          '& .MuiButton-endIcon': {
            transition: '0.5s',
          },
        },
        '&:hover': {
          '& .MuiButton-label': {
            '& .MuiButton-endIcon': {
              marginLeft: 160,
              [mw[0]]: {
                marginLeft: 8,
              },
            },
          },
        },
      },
      [mw[3]]: {
        left: 180,
      },
      [mw[2]]: {
        position: 'static',
      },
      [mw[0]]: {
        position: 'absolute',
        left: 20,
        right: 20,
        bottom: 20,
        width: 'initial',
      },
      [mh[1]]: {
        bottom: 80,
      },
    },
    left: {
      paddingLeft: 80,
      [mw[0]]: {
        padding: '0 20px',
      },
    },
    welcome: {
      fontSize: 26,
      fontWeight: 300,
      marginBottom: 20,
      [mw[0]]: {
        fontSize: 16,
        margin: '30px 0 0',
      },
      [mh[0]]: {
        margin: '50px 0 10px',
      },
      [mh[1]]: {
        margin: '80px 0 10px',
      },
    },
    titleContainer: {
      marginBottom: 10,
      position: 'relative',
      width: 'fit-content',
      [mw[0]]: {
        marginBottom: 0,
      },
      [mh[0]]: {
        marginBottom: 10,
      },
    },
    title: {
      color: '#F7B916',
      fontWeight: 700,
      fontSize: 80,
      [mw[0]]: {
        fontSize: 50,
      },
    },
    subtitle: {
      fontSize: 16,
      fontWeight: 300,
      color: '#8e9ac4',
      [mw[0]]: {
        fontSize: 12,
      },
    },

    right: {
      flex: 'auto',
      position: 'relative',
      [mw[2]]: {
        paddingLeft: 80,
        marginTop: 20,
        flex: 'auto',
      },
      [mw[0]]: {
        padding: '0 20px',
      },
      [mh[0]]: {
        marginTop: 30,
      },
    },
    desc: {
      position: 'absolute',
      left: 300,
      top: -10,
      width: 400,
      fontWeight: 300,
      [mw[3]]: {
        left: 180,
      },
      [mw[2]]: {
        position: 'static',
        marginBottom: 50,
      },
      [mw[0]]: {
        fontSize: 12,
        width: '100%',
      },
    },
  };
  const history = useHistory();

  const clickNext = () => {
    history.push('/pokedex');
    document.scrollingElement.scrollTop = 0;
  };

  return (
    <div css={classes.home}>
      <img src={cover} css={classes.cover} />
      <div css={classes.container}>
        <div css={classes.center}>
          <div css={classes.left}>
            <p css={classes.welcome}>Welcome To</p>
            <div css={classes.titleContainer}>
              <p css={classes.title}>Pokédex</p>
            </div>
          </div>
          <div css={classes.right}>
            <div css={classes.desc}>Pokédex is an electronic device designed to catalogue and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series.</div>
            <div css={classes.button}>
              <Button label="Search Pokemon" style={{ fontSize: 20, padding: '6px 22px', marginTop: 100 }} endIcon={<DoubleArrowRounded style={{ fontSize: 30 }} />} onClick={clickNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
