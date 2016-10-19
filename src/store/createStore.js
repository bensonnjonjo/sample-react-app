import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer,
  {} //no default state
);

export const history = syncHistoryWithStore(
  browserHistory, 
  store
);

export default store;
