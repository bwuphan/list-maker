import { combineReducers } from 'redux';

const appReducer = combineReducers({

});

export type StoreApp = ReturnType<typeof appReducer>;

export default appReducer;