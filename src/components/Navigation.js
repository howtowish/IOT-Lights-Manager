import React,{Component} from "react";
import {
    Navigator,
} from "react-native";
import Login from "./Login/Login.js";
import Register from "./Register/Register.js";
import Main from "./Home/Main.js"
import Createa from "./CreateProject/Createa.js";
import UserRoom from "./Rooms/UserRoom.js";
import Button from "./Rooms/Button/Button.js"
import deleteProject from "./Delete/deleteProject.js"
import deleteButton from "./Rooms/deleteButton/deleteButton.js"
import {Scene, Router} from 'react-native-router-flux';
class Navigation extends React.Component{
    render(){
        return(
            <Router>
                <Scene key="root">
                <Scene key="login" initial component={Login} title="Login" hideNavBar={true}/>
                <Scene key="register" component={Register} title="Register" hideNavBar={false}/>
                <Scene key="main" component={Main} />
                <Scene key="created"  component={Createa} title="Create Project" hideNavBar={true}/>
                <Scene key="userroom"  component={UserRoom} title="UserRoom" hideNavBar={true}  />
                <Scene key="button"  component={Button} title="Button" hideNavBar={true}/>
                <Scene key="delete" component={deleteProject} />
                <Scene key="deletebutton" component={deleteButton} />
                </Scene>
            </Router>
        );
    }
}
export default Navigation;