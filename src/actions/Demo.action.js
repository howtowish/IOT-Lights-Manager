import * as ActionsTypes from '../actiontypes';

export const onSubmitName = (payload) => ({
  type: ActionsTypes.ON_SUBMIT_NAME,
  payload,
});
export const onSubmitName1 = (payload) => ({
  type: ActionsTypes.ON_SUBMIT_NAME1,
  payload,
});
export const onSubmitLogin = (payload) => ({
  type: ActionsTypes.ON_SUBMIT_LOGIN,
  payload,
});
export const onSubmitRegister = (payload) => ({
  type: ActionsTypes.ON_SUBMIT_REGISTER,
  payload,
});
export const onSubmitHome = (payload) => ({
  type: ActionsTypes.ON_SUBMIT_HOME,
  payload,
});
export const onSubmitUserRoom = (payload) => ({
  type: ActionsTypes.ON_SUBMIT_USERROOM,
  payload,
});
export const onSubmitCreateButton=(payload)=>({
  type:ActionsTypes.ON_SUBMIT_CREATEBUTTON,
  payload,
});
export const onSubmitDeleteButton=(payload)=>({
  type:ActionsTypes.ON_SUBMIT_DELETEBUTTON,
  payload,
})
export const onSubmitCreateProject=(payload)=>({
  type:ActionsTypes.ON_SUBMIT_CREATEPROJECT,
  payload,
});
export const onSubmitDeleteProject=(payload)=>({
  type:ActionsTypes.ON_SUBMIT_DELETEPROJECT,
  payload,
});