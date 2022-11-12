// main
/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx } from '@emotion/react';

// libraries
import { Button } from '@material-ui/core';

const GeneralButton = ({label, onClick, style, startIcon, endIcon}) => {

  const button = {
    '&.MuiButton-root': {
      color: '#18242e',
      borderRadius: 8,
      '& .MuiButton-label': {
        textTransform: 'capitalize',
        fontWeight: 900,
        fontFamily: 'Lato, sans-serif',
      }
    }
  };

  return(
    <Button
      variant='contained'
      color='secondary'
      disableElevation
      onClick={onClick}
      style={style}
      css={button}
      startIcon={startIcon}
      endIcon={endIcon}
      data-testid='button'
    >
      {label}
    </Button>
  );
};

export default GeneralButton;