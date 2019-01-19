import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions as scenes } from 'react-native-router-flux';
import * as types from '../actiontypes';
import * as actions from '../actions';

export function* sceneChangeFlow(action) {
  try {
    const { scene: sceneKey, config } = action.payload;
    if (!Object.prototype.hasOwnProperty.call(scenes, sceneKey)) {
      throw new Error(`Unknown scene ${sceneKey}`);
    }
    switch (sceneKey) {
      default:
        yield call(scenes[sceneKey], config);
    }
    yield put(actions.sceneChangeSuccess());
  } catch (error) {
    yield put(actions.sceneChangeFailed(error.message));
  }
}

function* sceneChange() {
  yield takeLatest(types.SCENE_CHANGE_REQUEST, sceneChangeFlow);
}

export default sceneChange;
