import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './gol/reducer';
import App from './gol/App';

const liveMap = {
  3: true
};

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    rowN: 3,
    colN: 3,
    liveMap: liveMap
  }
});

ReactDOM.render(
  <App rowN={3} colN={3} liveMap={liveMap} />,
  document.getElementById('app')
);
