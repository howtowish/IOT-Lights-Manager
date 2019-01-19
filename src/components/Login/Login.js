import React,{Component} from "react";
import {
    View,Text,TextInput,TouchableOpacity,Image,Navigator,AsyncStorage,
}from "react-native";
import *as firebase from "firebase";
import {Actions} from"react-native-router-flux"
import styles from "./styles.js"
import * as actions from '../../actions';
import { connect,Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import constant from"../../constants";
import CheckBox from "react-native-checkbox";
import {createStore} from "redux";

// const TYPE_USERNAME='TYPE_USERNAME';
// const typeUsername=(text)=>({
//     type:TYPE_USERNAME,
//     text
// })
// const LoginFormTextInput=connect((state)=>({
//     value:state.textUser
// }),(dispatch)=>({
//     onChangeText:(text)=>{
//         dispatch(typeUsername(text));
//     }
// }))(TextInput)
var e;
class Login extends React.Component{
    constructor(props){
        super(props);
        e=this;
        this.state={
            textUser:"",
            textPass:"",
            logined:false,
            checked:false,
        }
        this.store=createStore((state,action)=>{
            console.log(JSON.stringify(action));

            return{...state,textUser:action.text}
        },this.state)
    }
    // async componentWillMount(){
    //    // alert(this.state.checked)
    //    // AsyncStorage.removeItem('Username:key')
    //    // AsyncStorage.removeItem('Password:key')
    //      try{
    //        // this.state.u=await AsyncStorage.getItem('Username:key');
    //         this.setState({textUser:await AsyncStorage.getItem('Username:key')})
    //         console.log(this.state.textUser);
    //         this.setState({textPass:await AsyncStorage.getItem('Password:key')});
    //         this.setState({checked:await AsyncStorage.getItem('check:key')});
    //          //  alert(this.state.checked)
    //         //value=await AsyncStorage.getItem('Password:key');
    //         console.log(this.state.textPass);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    async login(email,pass){
        try{
            await firebase.auth().signInWithEmailAndPassword(email,pass);
            this.setState({logined:true});
            this.props.onSubmitHome();
            //this.props.onSubmitHome();
        }catch(error){
            alert(error.toString())
        }
    }
//     async save(){
//         try {
//            // await AsyncStorage.setItem('check:key',this.state.checked);
//             await AsyncStorage.setItem('Username:key',this.state.textUser);
//             await AsyncStorage.setItem('Password:key',this.state.textPass);
//             console.log("saved");
//         } catch (error) {
//             // Error saving data
//             console.log(err);
//         }
//   }
//     async get(){
//         try{
//            // this.state.u=await AsyncStorage.getItem('Username:key');
//             this.setState({textUser:await AsyncStorage.getItem('Username:key')})
//             console.log(this.state.textUser);
//             this.setState({textPass:await AsyncStorage.getItem('Password:key')})
//             //value=await AsyncStorage.getItem('Password:key');
//             console.log(this.state.textPass);
//         }catch(err){
//             console.log(err);
//         }
//   }
    render(){
        return(
            //<Provider store={this.store}>
            <View style={styles.container} >
              <Image source={require("../../images/background.jpg")} style={styles.backgroundImage}>
                <View style={styles.content}>
                    <Text style={styles.logo}> Internet Of Things </Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        placehoder="Username"
                        onChangeText={(textUser)=>{this.setState({textUser})}}
                        value={this.state.textUser}
                        >

                        </TextInput>

                        <TextInput
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        placehoder="Password"
                        onChangeText={(textPass)=>{this.setState({textPass})}}
                        value={this.state.textPass}
                        >

                        </TextInput>
                    </View>
                    <TouchableOpacity onPress={()=>{this.login(this.state.textUser,this.state.textPass)}} style={styles.buttonContainer}>
                        <Text style={[styles.buttonText]}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text style={[styles.buttonText,{color:"red"}]}>-----------------------OR----------------------- </Text>
                    <TouchableOpacity onPress={()=>{this.props.onSubmitRegister()}} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
              </Image>
            </View>
            //</Provider>
        )
    }
}
const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
