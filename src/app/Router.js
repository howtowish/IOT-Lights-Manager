import React, { Element } from 'react'

import {
  BackAndroid,
  Text,
  Navigator
} from 'react-native';
import { Router, Scene, Reducer, ActionConst, Modal, Actions, TabBar } from 'react-native-router-flux';
import { connect } from 'react-redux';
import DemoScreen from '../components/Demo/Demo';
import Demo2Screen from '../components/demo2/demo2';
import Demo3Screen from '../components/demo3/demo3';
import Const from '../constants';
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Main";
import Room from "../components/Rooms/UserRoom";
import CreateButton from "../components/Rooms/Button/Button";
import DeleteButton from "../components/Rooms/deleteButton/deleteButton";
import CreateProject from "../components/CreateProject/Createa";
import DeleteProject from "../components/Delete/deleteProject";

const RouterWithRedux = connect()(Router);

const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: 'transparent',
})

var pressCount = 0;
const scenes = Actions.create(
  <Scene key="modal" >
    <Scene key="root">
        <Scene
          key={Const.Router.LOGIN_SCREEN}
          component={Login}
          hideNavBar={true}
          style={{ flex: 1, backgroundColor: 'transparent' }}
          initial
        />
        <Scene
          key={Const.Router.HOME_SCREEN}
          component={Home}
          hideNavBar={true}
          style={{ flex: 1, backgroundColor: 'transparent' }}
          />
        <Scene
          key={Const.Router.USERROOM_SCREEN}
          component={Room}
          hideNavBar={true}
          style={{ flex: 1, backgroundColor: 'transparent' }}
        />

        <Scene
          key={Const.Router.CREATEBUTTON_SCREEN}
          component={CreateButton}
          hideNavBar={true}
          style={{ flex: 1, backgroundColor: 'transparent' }}
        />
        <Scene
          key={Const.Router.DELETEBUTTON_SCREEN}
          component={DeleteButton}
          hideNavBar={true}
          styles={{flex:1,backgroundColor:"transparent"}}
        />
        <Scene
          key={Const.Router.CREATEPROJECT_SCREEN}
          component={CreateProject}
          hideNavBar={true}
          styles={{flex:1,backgroundColor:"transparent"}}
        />
        <Scene
          key={Const.Router.DELETEPROJECT_SCREEN}
          component={DeleteProject}
          hideNavBar={true}
          styles={{flex:1,backgroundColor:"transparent"}}
        />
        <Scene
          key={Const.Router.REGISTER_SCREEN}
          hideNavBar={true}
          component={Register}
          style={{ flex: 1, backgroundColor: 'transparent' }}
        />
    </Scene>
  </Scene>
);

export default (): Element => (
  <RouterWithRedux
    getSceneStyle={getSceneStyle}
    scenes={scenes}
  >
  </RouterWithRedux>

)
