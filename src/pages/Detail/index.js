// main
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { KeyboardBackspaceRounded } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import axios from 'axios';

// components
import Container from '../../components/Container';
import Tags from '../../components/Tags';

import Chart from '../../components/Chart';

// assets
import logo from '../../assets/icons/pokemon-yellow.svg';

// helpers
import formatName from '../../helpers/formatName';
import roundingNumber from '../../helpers/roundingNumber';

const Detail = () => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();

  const [data, setData] = useState(null);
  const [types, setTypes] = useState([]);
  const [moves, setMoves] = useState([]);

  const [loading, setLoading] = useState(true);

  const breakpoints = [576, 768, 992, 1200];
  const mw = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
  const classes = {
    back: {
      cursor: 'pointer',
      display: 'flex',
      marginBottom: 20,
      '& .MuiSvgIcon-root': {
        fontSize: 40,
        [mw[0]]: {
          fontSize: 30,
        },
      },
      [mw[0]]: {
        marginBottom: 5,
      },
    },
    backInfo: {
      lineHeight: '40px',
      opacity: 0.6,
      marginLeft: 5,
      fontWeight: 300,
      [mw[0]]: {
        lineHeight: '30px',
      },
    },
    name: {
      fontSize: 40,
      fontWeight: 600,
      color: '#F7B916',
      [mw[0]]: {
        fontSize: 34,
      },
    },
    id: {
      fontSize: 20,
      position: 'absolute',
      bottom: 4,
      right: 0,
      [mw[0]]: {
        fontSize: 16,
      },
    },
    img: {
      textAlign: 'center',
      position: 'relative',
      marginBottom: 50,
      '& img': {
        width: 475,
        height: 475,
        objectFit: 'cover',
        objectPosition: 'center',
        filter: 'drop-shadow(5px 12px 15px rgba(0,0,0,0.5))',
        [mw[1]]: {
          width: 400,
          height: 400,
        },
        [mw[0]]: {
          width: 300,
          height: 300,
        },
      },
      [mw[0]]: {
        marginBottom: 25,
      },
      '& .MuiSkeleton-root': {
        height: 478,
        [mw[1]]: {
          height: 403,
        },
        [mw[0]]: {
          height: 303,
        },
      },
    },
    nameImg: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: 120,
      fontWeight: 900,
      color: '#343E63',
      [mw[1]]: {
        fontSize: 75,
      },
      [mw[0]]: {
        fontSize: 55,
      },
    },
    infoContainer: {
      display: 'flex',
      [mw[0]]: {
        display: 'block',
      },
    },
    left: {
      width: '45%',
      borderRight: '1px solid #EFF2FC',
      display: 'flex',
      justifyContent: loading ? 'space-between' : types.length < 2 ? 'center' : 'space-between',
      alignItems: 'center',
      paddingRight: types.length < 2 ? 0 : 70,
      boxSizing: 'border-box',
      [mw[3]]: {
        paddingRight: types.length < 2 ? 0 : 40,
      },
      [mw[1]]: {
        paddingRight: types.length < 2 ? 0 : 20,
      },
      [mw[0]]: {
        width: '100%',
        borderRight: 'none',
        marginBottom: 30,
        justifyContent: loading ? 'space-around' : types.length < 2 ? 'center' : 'space-around',
        paddingRight: 0,
      },
      '& .MuiSkeleton-root': {
        width: 170,
        height: 35,
        borderRadius: 25,
        [mw[3]]: {
          width: 135,
        },
        [mw[1]]: {
          width: 95,
        },
        [mw[0]]: {
          width: 130,
        },
      },
    },
    right: {
      width: '55%',
      display: 'flex',
      textAlign: 'center',
      [mw[0]]: {
        width: '100%',
      },
    },
    infoTitle: {
      marginBottom: 8,
      fontWeight: 300,
      [mw[0]]: {
        fontSize: 12,
      },
      '& .MuiSkeleton-root': {
        width: 100,
        margin: '0 auto',
        [mw[1]]: {
          width: 60,
        },
      },
    },
    info: {
      fontSize: 20,
      color: '#F7B916',
      [mw[0]]: {
        fontSize: 16,
      },
      '& .MuiSkeleton-root': {
        width: 100,
        margin: '0 auto',
        [mw[1]]: {
          width: 60,
        },
      },
    },
    stats: {
      marginTop: 50,
      position: 'relative',
      overflow: 'hidden',
      [mw[1]]: {
        height: 460,
      },
      [mw[0]]: {
        marginTop: 40,
        height: 255,
      },
    },
    chart: {
      [mw[1]]: {
        width: 740,
        height: 460,
        position: loading ? 'static' : 'absolute',
        top: '50%',
        left: '50%',
        transform: loading ? 'none' : 'translate(-50%, -50%)',
      },
      [mw[0]]: {
        width: loading ? '100%' : 400,
        height: 255,
        position: loading ? 'static' : 'absolute',
        top: '50%',
        left: '53%',
        transform: loading ? 'none' : 'translate(-50%, -50%)',
      },
      '& .MuiSkeleton-root': {
        height: 621,
        [mw[3]]: {
          height: 460,
        },
        [mw[0]]: {
          height: 249,
        },
      },
    },
    moves: {
      marginTop: 20,
    },
    movesTitle: {
      fontWeight: 300,
      fontSize: 20,
      [mw[0]]: {
        fontSize: 16,
        textAlign: 'center',
      },
      '& .MuiSkeleton-root': {
        [mw[0]]: {
          margin: '0 auto',
        },
      },
    },
    tags: {
      marginTop: 15,
      display: 'flex',
      flexWrap: 'wrap',
      [mw[0]]: {
        justifyContent: 'center',
      },
      '& .MuiSkeleton-root': {
        height: 31,
        width: 100,
        borderRadius: 16,
        margin: '0 10px 10px 0',
        [mw[0]]: {
          margin: 5,
        },
      },
    },
    tag: {
      backgroundColor: '#343E63',
      borderRadius: 20,
      padding: '6px 24px',
      width: 'fit-content',
      margin: '0 10px 10px 0',
      color: '#F7B916',
      [mw[0]]: {
        fontSize: 12,
        margin: 5,
      },
    },
    tagClick: {
      backgroundColor: '#343E63',
      borderRadius: 20,
      padding: '6px 24px',
      width: 'fit-content',
      margin: '0 10px 10px 0',
      color: '#F7B916',
      cursor: 'pointer',
      '&:hover': {
        opacity: '0.7',
      },
      [mw[0]]: {
        fontSize: 12,
        margin: 5,
      },
    },
    capture: {
      '&.MuiButtonBase-root': {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        display: 'block',
        width: '100%',
        zIndex: 2,
        fontWeight: 900,
        fontSize: 28,
        boxShadow: '0 -5px 20px 0 rgba(0,0,0,0.3)',
        borderRadius: '25px 25px 0 0',
        '&.Mui-disabled': {
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
        },
        [mw[0]]: {
          fontSize: 20,
        },
      },
    },
    count: {
      width: 70,
      height: 70,
      background: `url(${logo}) no-repeat`,
      backgroundSize: 'cover',
      lineHeight: '77px',
      textAlign: 'center',
      color: '#2A3050',
      fontWeight: 900,
      boxSizing: 'border-box',
      float: 'right',
      position: '-webkit-sticky',
      position: 'sticky',
      top: 20,
      zIndex: 1,
      filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.5))',
      [mw[0]]: {
        position: 'fixed',
        right: 20,
      },
    },
  };

  useEffect(() => {
    if (id) {
      document.title = `${formatName(id)} | Pokédex`;
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
          setData(res.data);
          setTypes(res.data.types.map((item) => item.type.name));
          setMoves(res.data.moves.map((item) => item.move.name));
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <Container style={{ position: 'relative', zIndex: 1 }}>
      <div onClick={() => history.push('/pokedex')} css={classes.back}>
        <KeyboardBackspaceRounded />
        <div css={classes.backInfo}>Pokédex</div>
      </div>
      <div style={{ position: 'relative' }}>
        <div css={classes.name}>{loading ? <Skeleton width={200} animation="wave" /> : formatName(data.name)}</div>
        <div css={classes.id}>{loading ? <Skeleton width={47} animation="wave" /> : `#${roundingNumber(data.id)}`}</div>
      </div>
      {loading ? (
        <div css={classes.img}>
          <Skeleton variant="rect" animation="wave" />
        </div>
      ) : (
        <div css={classes.img}>
          <div css={classes.nameImg}>{data && data.name.toUpperCase()}</div>
          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${data && roundingNumber(data.id)}.png`} alt={data && formatName(data.name)} />
        </div>
      )}
      <div css={classes.infoContainer}>
        <div css={classes.left}>{loading ? [1, 2].map((item) => <Skeleton variant="rect" animation="wave" />) : types.map((item) => <Tags type={item} />)}</div>
        <div css={classes.right}>
          <div style={{ width: `${100 / 3}%` }}>
            <div css={classes.infoTitle}>{loading ? <Skeleton animation="wave" /> : 'Height'}</div>
            <div css={classes.info}>{loading ? <Skeleton animation="wave" /> : `${data.height / 10} m`}</div>
          </div>
          <div style={{ width: `${100 / 3}%` }}>
            <div css={classes.infoTitle}>{loading ? <Skeleton animation="wave" /> : 'Weight'}</div>
            <div css={classes.info}>{loading ? <Skeleton animation="wave" /> : `${data.weight / 10} kg`}</div>
          </div>
          <div style={{ width: `${100 / 3}%` }}>
            <div css={classes.infoTitle}>{loading ? <Skeleton animation="wave" /> : 'Abilities'}</div>
            <div css={classes.info}>{loading ? <Skeleton animation="wave" /> : formatName(data.abilities[0].ability.name)}</div>
          </div>
        </div>
      </div>
      <div css={classes.stats}>
        <div css={classes.chart}>
          {loading ? (
            <Skeleton variant="rect" animation="wave" />
          ) : (
            <Chart
              series={[
                {
                  name: data ? data.name : '',
                  data: data ? data.stats.map((item) => item.base_stat) : [],
                },
              ]}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Detail;
