import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from '@reach/router';

import { unit } from '../styles';


const ShowTile = ({ show }) => {
  const { id, name, } = show;
  return (
    <StyledLink
      to={`/show/${id}`}
    
    >
      <h3>{show ? show.name : ''}</h3>
      <h5>{show && show.id}</h5>
    </StyledLink>
  );
}

export default ShowTile;

export const cardClassName = css({
    padding: `${unit * 4}px ${unit * 5}px`,
    borderRadius: 7,
    color: 'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  });
  
  const padding = unit * 2;
  const StyledLink = styled(Link)(cardClassName, {
    display: 'block',
    height: 193,
    marginTop: padding,
    textDecoration: 'none',
    ':not(:last-child)': {
      marginBottom: padding * 2,
    },
  });
