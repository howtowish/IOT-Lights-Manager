import React,{Component} from "react";
import {
    TouchableOpacity,Text,View,
} from "react-native";

import { connect } from 'react-redux';
import {Actions} from "react-native-router-flux";
import constant from "../../../constants";
class SideMenu extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:"blue",paddingTop:100}}>
                <TouchableOpacity onPress={()=>Actions[constant.Router.CREATEBUTTON_SCREEN]()}>
                    <Text>Create1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions[constant.Router.DELETEBUTTON_SCREEN]()}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default SideMenu