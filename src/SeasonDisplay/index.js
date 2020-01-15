import React from 'react';

import './style.css';

// import { Container } from './styles';

const seasonConfig = {
  verao: {
    text: 'Bora tomar uma bera gelada!',
    iconName: 'sun icon massive ',
  },
  inverno: {
    text: 'Ta frio pra caramba!!',
    iconName: 'snowflake icon massive',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'verao' : 'inverno';
  } else {
    return lat > 0 ? 'inverno' : 'verao';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.userLatitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName}`}></i>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName}`}></i>
    </div>
  );
};

export default SeasonDisplay;
