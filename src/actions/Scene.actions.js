import * as types from '../actiontypes';
/**
 * scene change requests
 */
export const sceneChangeRequest = (scene, config) => ({
  type: types.SCENE_CHANGE_REQUEST,
  payload: {
    scene,
    config,
  },
});

export const sceneChangeSuccess = () => ({
  type: types.SCENE_CHANGE_SUCCESS,
});

export const sceneChangeFailed = errorMsg => ({
  type: types.SCENE_CHANGE_FAILED,
  payload: errorMsg,
});

/**
 * react-native-router-flux's FOCUS action
 */
export const sceneFocus = (sceneKey) => ({
  type: types.SCENE_FOCUS,
  payload: sceneKey,
});
