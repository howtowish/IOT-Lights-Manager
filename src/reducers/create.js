import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import mySaga from '../sagas/sagas';
import { Router } from 'react-native-router-flux';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()


const enhancer = (true) ?
  composeWithDevTools(
    applyMiddleware(
      //reduxThunkMiddleware,
      // Reactotron.reduxMiddleware,
      sagaMiddleware,
      //storeMiddleware
    )
  )
:
  compose(
    applyMiddleware(
      //reduxThunkMiddleware,
      // Reactotron.reduxMiddleware,
      sagaMiddleware,
      //storeMiddleware
    )
  );




export default function configureStore(initialState): Store {
  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    enhancer
  );
  sagaMiddleware.run(mySaga);
  //Reactotron.addReduxStore(store);
  return store
}
