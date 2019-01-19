import React,{Component} from "react";
import {View,Text,TextInput,StatusBar,TouchableOpacity,ListView,Image} from "react-native";
import * as firebase from "firebase";
import {Actions} from "react-native-router-flux"
import styles from "./styles.js"
var e;
var Ktra=true;
class Register extends React.Component{
    constructor(props){
        super(props)
        e=this;
        this.state={
            txt_username:"",
            txt_pass:"",
        }
        database=firebase.database();
        user=database.ref('User');
    }
 //Tạo auth cho user
    async signup(email,pass) {
        try {
            await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);
            console.log("Account created");
            alert("Đăng ký thành công!");
            Actions.pop();
        // Navigate to the Home page, the user is auto logged in
        } catch (error) {
            alert("Đăng ký thất bại.Xin kiểm tra lại!!")
            console.log(error.toString())
        }
    }
    // async login(email, pass) {
    //     try {
    //         var fb=firebase.auth();
    //         await fb
    //             .signInWithEmailAndPassword(email, pass);
    //             alert("Login success")
    //             console.log("Logged In!");
    //             await database.ref('User/'+fb.currentUser.uid).push({
    //             Username:"Thong",
    //             Email:email,
    //             Room:"1"
    //        },()=>alert("Ghi Thanh Cong"))
    //     // Navigate to the Home page
    //     } catch (error) {
    //         console.log(error.toString())
    //     }
    //     Callback(write())
    // }
    render(){
        return(
          <View style={styles.container}>
            <View style={styles.content} >
              <View style={styles.inputContainer}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.logo}> Register </Text>
                  <View style={{flex:1,alignItems:"flex-end"}}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                      <Image source={require("../../images/X.png")} style={{height:30,width:30}}/>
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput style={styles.input}
                  placeholder="Username or Email"
                  placeholderTextColor="#3949AB"
                  onChangeText={(txt_username)=>this.setState({txt_username})}
                  keyboardType="default"
                  autoCapitalize="none"
                  value={this.state.txt_username}
                />
                <TextInput style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#3949AB"
                  onChangeText={(txt_pass)=>this.setState({txt_pass})}
                  keyboardType="default"
                  autoCapitalize="none"
                  secureTextEntry
                  value={this.state.txt_pass}
                />
                <View style={styles.row}>
                  <TouchableOpacity onPress={()=>{this.signup(this.state.txt_username,this.state.txt_pass)}} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}> Register </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )
    }

}
export default Register
