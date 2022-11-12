// main
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { Skeleton } from '@material-ui/lab';

// components
import Container from '../../components/Container';
import Card from '../../components/ListCard';

// helpers
import formatName from '../../helpers/formatName';
import roundingNumber from '../../helpers/roundingNumber';

const Detail = () => {
  const breakpoints = [576, 768, 992, 1200];
  const mw = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
  const classes = {
    title: {
      color: '#F7B916',
      lineHeight: '50px',
      [mw[0]]: {
        fontSize: 24,
      },
    },
    info: {
      lineHeight: '50px',
      color: '#F7B916',
      textAlign: 'right',
      marginRight: 10,
      fontWeight: 300,
      [mw[0]]: {
        fontSize: 14,
        marginRight: 45,
      },
    },
    list: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingTop: 50,
      [mw[0]]: {
        justifyContent: 'space-around',
        paddingTop: 20,
      },
    },
    loading: {
      width: 'fit-content',
      paddingTop: 100,
      marginBottom: 5,
      boxSizing: 'border-box',
      [mw[0]]: {
        paddingTop: 60,
      },
      '& .MuiSkeleton-root': {
        borderRadius: 25,
        [mw[0]]: {
          width: '130px !important',
          height: '110px !important',
        },
      },
    },
  };

  const history = useHistory();
  const [data, setData] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [scroll, setScroll] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const clickPokemon = (id) => {
    history.push(`/detail/${id}`);
    document.scrollingElement.scrollTop = 0;
  };

  useEffect(() => {
    document.title = 'Pokédex';
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then((res) => {
        setData(res.data.results);
        setNext(res.data.next);
        setPrev(res.data.previous);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (data.length > 898) {
      setData(data.filter((item, i) => i <= 897));
    }
  }, [data]);

  useEffect(() => {
    if (localStorage) {
      const storage = JSON.parse(localStorage.getItem('pokemon-list'));
      if (storage) {
        setCount(storage.length);
      }
    }
  }, [localStorage]);

  window.onscroll = () => {
    if (document.scrollingElement.scrollTop) {
      setScroll(document.scrollingElement.scrollTop);
    }
  };

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '40%' }}>
          <h1 css={classes.title}>Pokédex</h1>
        </div>
      </div>
      <div css={classes.list}>
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item) => (
              <div css={classes.loading}>
                <Skeleton variant="react" width={240} height={155} animation="wave" />
              </div>
            ))
          : data.map((item) => <Card name={formatName(item.name)} id={roundingNumber(item.url.slice(34, -1))} onClick={() => clickPokemon(item.name)} />)}
      </div>
    </Container>
  );
};

export default Detail;
