import React,{Component} from "react";
import {
    View,Text,ListView,Switch,TouchableOpacity,Image,ScrollView
} from "react-native";
import {Actions} from "react-native-router-flux"
import styles from "./styles.js"
import *as firebase from "firebase"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions';
import * as selectors from '../../../selectors';
import Const from "../../../constants"
var items;
var e;
class deleteButton extends React.Component{
    constructor(props){
        super(props);
        items=[];
        e=this;
        this.state={
            dataSource:new ListView.DataSource({ rowHasChanged: ( r1 , r2 ) => r1 !== r2 })
        };
    }
    componentWillMount(){
        firebase.database().ref("User/"+firebase.auth().currentUser.uid+"/"+this.props.APIKEY+"/Control").on("value",function(snap){
            items=[];
            snap.forEach(function(data){
                items.push({
                    key:data.key,
                    data:data.val(),
                })
            })
            if(items.length===0) Actions.pop({popNum:2});
            if(items.length>0)
                e.setState({ dataSource:e.state.dataSource.cloneWithRows(items)})
        });
    }
    removeToDo(data){
        firebase.database().ref("User/"+firebase.auth().currentUser.uid+"/"+this.props.APIKEY+"/Control/").child(data.key).remove();
    }
    renderRow(data){
        return(
          <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={styles.listviewButton} onPress={()=>this.removeToDo(data)} >
                <Image source={require("../../../images/delete.png")} style={{height:40,width:30}} />
              </TouchableOpacity>
              <Image source={require("../../../images/On.png")} style={[styles.buttonImage]} />
              <Text style={styles.buttonText} >{data.data.Name} </Text>
          </View>

        )
    }
    render(){
        return(
          <View style={styles.container}>
              <View style={styles.titleContainer}>
              <TouchableOpacity onPress={()=>Actions.pop()} style={styles.buttonImage}>
                <Image source={require("../../../images/back3.png")} style={styles.buttonImage}/>
              </TouchableOpacity >
                <View style={styles.titleTextContainer}>
                  <Text style={[styles.titleText,{color:"white"}]}> Delete Switch</Text>
                </View>
              </View>
              <View style={styles.content}>
                <ScrollView style={styles.contentScrollView} automaticallyAdjustContentInsets={false} horizontal={false} >
                  <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                  />
                </ScrollView>
              </View>
          </View>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    APIKEY: selectors.getKey(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(deleteButton);
