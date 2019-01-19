import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actiontypes';
import Const from '../constants';

function* onSubmitName(action) {
  try {
    yield put(actions.sceneChangeRequest(Const.Router.DEMO2_SCREEN));
  } catch (error) {

  }
}
function* onSubmitName2(action) {
  try {
    yield put(actions.sceneChangeRequest(Const.Router.DEMO3_SCREEN));
  } catch (error) {

  }
}
function* saga_Login(action) {
  try {
    yield put(actions.sceneChangeRequest(Const.Router.LOGIN_SCREEN));
  } catch (error) {

  }
}
function* saga_Register(action) {
  try {
    yield put(actions.sceneChangeRequest(Const.Router.REGISTER_SCREEN));
  } catch (error) {

  }
}
function* saga_Home(action) {
  try {
    //Định danh của router-flux
    yield put(actions.sceneChangeRequest(Const.Router.HOME_SCREEN));
  } catch (error) {

  }
}
function* saga_Room(action) {
  try {
    //Định danh của router-flux
    yield put(actions.sceneChangeRequest(Const.Router.USERROOM_SCREEN));
  } catch (error) {

  }
}
function* saga_CreateButton(action){
  try{
    yield put(actions.sceneChangeRequest(Const.Router.CREATEBUTTON_SCREEN));
  }catch(err){

  }
}
function* saga_DeleteButton(action){
  try{
    yield put(actions.sceneChangeRequest(Const.Router.DELETEBUTTON_SCREEN));
  }catch(err){

  }
}
function* saga_CreateProject(action){
  try{
    yield put(actions.sceneChangeRequest(Const.Router.CREATEPROJECT_SCREEN));
  }catch(err){

  }
}
function* saga_DeleteProject(action){
  try{
    yield put(actions.sceneChangeRequest(Const.Router.DELETEPROJECT_SCREEN));
  }catch(err){

  }
}
function* watchOnSubmitName() {
  yield takeLatest(types.ON_SUBMIT_NAME, onSubmitName);
  yield takeLatest(types.ON_SUBMIT_NAME1, onSubmitName2);
  yield takeLatest(types.ON_SUBMIT_LOGIN, saga_Login);
  yield takeLatest(types.ON_SUBMIT_REGISTER,saga_Register);
  yield takeLatest(types.ON_SUBMIT_HOME,saga_Home);               //Kết nối giữa Action và router-flux
  yield takeLatest(types.ON_SUBMIT_USERROOM,saga_Room);
  yield takeLatest(types.ON_SUBMIT_CREATEBUTTON,saga_CreateButton);
  yield takeLatest(types.ON_SUBMIT_DELETEBUTTON,saga_DeleteButton);
  yield takeLatest(types.ON_SUBMIT_CREATEPROJECT,saga_CreateProject);
  yield takeLatest(types.ON_SUBMIT_DELETEPROJECT,saga_DeleteProject);
}
export default watchOnSubmitName;
