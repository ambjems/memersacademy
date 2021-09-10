import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import newsReducer from "./reducers/newsReducer";
import { watcherSaga } from "./sagas/rootSaga.js";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  news: newsReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, 
  composeWithDevTools(
    applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
