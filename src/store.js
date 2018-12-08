import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import rootReducer from './reducers';

export function configureStore(initialState = {}) {

  const composeEnhancers =
   typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancers = composeEnhancers(
    applyMiddleware(promise),
    // applyMiddleware(thunk),
    // applyMiddleware(logger)
  );

  const store = createStore(rootReducer, initialState, enhancers);

  return store;
}