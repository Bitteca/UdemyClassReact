import React from 'react';

// import { Container } from './styles';

const Loader = props => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.message}</div>
    </div>
  );
};

Loader.defaultProps = {
  message: 'Carregando...',
};

export default Loader;
