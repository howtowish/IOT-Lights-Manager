import assign from 'object-assign';
import * as types from '../../actiontypes';

const initialState = {
  demoData: 'Hello Redux',
  name: 'ádfsadg',
  name1:"zxc",
  APIKEY:"",
  YourRoom:"",
}
//biến muốn truyền đi
export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.ON_SUBMIT_NAME:
      console.log(action);
      return {
        ...state,
        name: action.payload.name,
        name1:action.payload.name1,
      };
      case types.ON_SUBMIT_NAME1:
        console.log(action);
        return {
          ...state,
          name: action.payload.name,
          name1:action.payload.name1,
        };
      case types.ON_SUBMIT_USERROOM:
        console.log(action);
        return {
          ...state,
          APIKEY: action.payload.APIKEY,
          YourRoom:action.payload.YourRoom,
        };
      case types.ON_SUBMIT_CREATEBUTTON:
      console.log(action);
      return{
        ...state,
        APIKEY:action.payload.APIKEY,
      };
      case types.ON_SUBMIT_DELETEBUTTON:
      console.log(action);
      return{
        ...state,
        APIKEY:action.payload.APIKEY,
      }
    default:
      return state;
  }
}
