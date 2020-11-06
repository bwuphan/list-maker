import { createStore } from 'redux'
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/rootReducer';

const middleware = [createLogger()];

const store = createStore(rootReducer, middleware);

export default store;
export const dispatch = store.dispatch;

export type Action = {
  type: string
  payload?: any
};
