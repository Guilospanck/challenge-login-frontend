import { createStore, applyMiddleware } from 'redux';

const createStoreFunction =  (reducers, middlewares) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};

export default createStoreFunction;
