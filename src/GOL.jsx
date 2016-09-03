import React from 'react';
import ReactDOM from 'react-dom';
import App from './gol/App';

const liveMap = {
  3: true
};

ReactDOM.render(
  <App rowN={3} colN={3} liveMap={liveMap} />,
  document.getElementById('app')
);
