import createSagaMonitor from 'redux-saga';
import createStore from './createStore';

import {rootReducer} from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = null;
const sagaMiddleware = createSagaMonitor({ sagaMonitor });
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export { store };
