import React,{Component} from "react";
import {
    TextInput,View,TouchableOpacity,Text,Image
}from "react-native";
import {Actions} from "react-native-router-flux";
import styles from "./styles.js"
import * as firebase from "firebase";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions';
import * as selectors from '../../../selectors';

var e;
class Button extends React.Component{
    constructor(props){
        super(props);
        e=this;
        this.state={
            textName:"",
            textPIN:"",
            output:false,
        }
    }
    async CreateLed(){
         try{
            await firebase.database().ref("User/"+firebase.auth().currentUser.uid+"/"+this.props.APIKEY+"/Control/"+this.state.textPIN+"/").set({
                Name:this.state.textName,
                output:this.state.output
            })
            Actions.pop();
            //  this.props.onSubmitUserRoom({APIKEY:this.props.APIKEY});
        }catch(err){
            alert(err.toString());
        }
    }
    render(){
        return(
          <View style={styles.container}>
            <View style={styles.content} >
              <View style={styles.inputContainer}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.logo}> Create Switch </Text>
                  <View style={{flex:1,alignItems:"flex-end"}}>
                    <TouchableOpacity onPress={()=>Actions.pop()}>
                      <Image source={require("../../../images/X.png")} style={{height:30,width:30}}/>
                    </TouchableOpacity>
                  </View>
                </View>
                <TextInput style={styles.input}
                  placeholder="Name"
                  placeholderTextColor="#3949AB"
                  onChangeText={(textName)=>this.setState({textName})}
                  keyboardType="default"
                  autoCapitalize="none"
                  value={this.state.textName}
                />
                <TextInput style={styles.input}
                  placeholder="Pin"
                  placeholderTextColor="#3949AB"
                  onChangeText={(textPIN)=>this.setState({textPIN})}
                  keyboardType="default"
                  autoCapitalize="none"
                  value={this.state.textPIN}
                />
                <View style={styles.row}>
                  <TouchableOpacity onPress={()=>{this.CreateLed()}} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}> Create </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    APIKEY:selectors.getKey(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Button);
