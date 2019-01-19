import React,{Component} from "react";
import {
    View,ListView,TouchableOpacity,Text,StyleSheet,ScrollView,Image
}from "react-native";
import * as firebase from "firebase";
import {Actions} from "react-native-router-flux"
import styles from "./styles.js"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from '../../actions';
import * as selectors from '../../selectors';

var items;
var e;
class deleteProject extends React.Component{
    constructor(props){
        super(props);
        e=this;
        items=[];
        this.state={
             dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
        }
        // var database=new firebase("https://ardunio-c940c.firebaseio.com");
        // this.itemsRef=database.child("User/"+firebase.auth().currentUser.uid);
    }
    //Đọc dữ liệu từ firebase vào datasource
    componentWillMount(){
        firebase.database().ref("User/"+firebase.auth().currentUser.uid).on("value",function(snap){
            items=[];
            snap.forEach(function(data){
                items.push({
                    key:data.key,
                    data:data.val(),
                })
            })
            if(items.length===0) Actions.pop();
            if(items.length>0)
                e.setState({dataSource:e.state.dataSource.cloneWithRows(items)});
        })
    }

    removeTodo(data){
         firebase.database().ref("User/"+firebase.auth().currentUser.uid).child(data.key).remove();
    }
    //dữ liệu đọc được trong data
    renderRow(data){
        return(
          <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={styles.listviewButton} onPress={()=>this.removeTodo(data)} >
                <Image source={require("../../images/delete.png")} style={{height:50,width:40}} />
              </TouchableOpacity>
              <Image source={require("../../images/Home.png")} style={styles.buttonImage} />
              <Text style={styles.buttonText} >{data.data.ProjectName}-APIKEY: {data.key} </Text>
          </View>
        )
    }
    async logout(){
        try{
            await firebase.auth().signOut();
            alert("Thoát thành công!!");
            Actions.login();
        }catch(err){
            alert(err.toString())
        }
     }
    render(){
        return(
          <View style={styles.container}>
              <View style={styles.titleContainer}>
              <TouchableOpacity onPress={()=>Actions.pop()} style={styles.buttonImage}>
                <Image source={require("../../images/back3.png")} style={styles.iconImage}/>
              </TouchableOpacity >
                <View style={styles.titleTextContainer}>
                  <Text style={[styles.titleText,{color:"white"}]}> Delete Project</Text>
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
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(deleteProject);
