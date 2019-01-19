import { fork } from 'redux-saga/effects';
import watchOnSubmitName from './onSubmitName.saga';
import sceneChange from './sceneChange.saga';
function* root() {
  yield [
    fork(watchOnSubmitName),
    fork(sceneChange),
  ]
}

export default root;
