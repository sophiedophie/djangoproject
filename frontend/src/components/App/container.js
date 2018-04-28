import React from 'react';
import App from './presenter';

// index.js get props > pass them to container > presenter
const Container = props => {
  return (
    <App {...props} />
  )
}

export default Container