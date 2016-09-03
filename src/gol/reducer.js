const INIT_STATE = {
  rowN: 3,
  colN: 3,
  liveMap: {}
};

function next(state) {
  return state;
}

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case 'SET_STATE':
      return action.state;
    case 'NEXT':
      return next(state);
  }
  return state;
}
