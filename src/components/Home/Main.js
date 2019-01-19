import React,{Component} from "react";
import {
    View,ListView,TouchableOpacity,Text,StyleSheet,ScrollView,Image
}from "react-native";
import * as firebase from "firebase";
import {Actions} from "react-native-router-flux"
import styles from "./styles.js"

import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drawer from "react-native-drawer";
var items;
var e;
class Main extends React.Component{
    constructor(props){
        super(props);
        e=this;
        items=[];
        this.state={
             dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
        }
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
            if(items.length>0)
                e.setState({dataSource:e.state.dataSource.cloneWithRows(items)});
        })
    }
  //  Actions.userroom({APIKEY:data.key,YourRoom:data.data.ProjectName})
    //dữ liệu đọc được trong data
    renderRow(data){
        return(
            <View>
                <TouchableOpacity style={styles.listviewButton} onPress={()=>this.props.onSubmitUserRoom({APIKEY:data.key,YourRoom:data.data.ProjectName})} >
                    <Image source={require("../../images/Home.png")} style={styles.buttonImage} />
                    <Text style={styles.buttonText} >{data.data.ProjectName}-APIKEY: {data.key} </Text>
                </TouchableOpacity>
            </View>
        )
    }
    async logout(){
        try{
            await firebase.auth().signOut();
            alert("Thoát thành công!!");
            //Actions.login();
            this.props.onSubmitLogin();
        }catch(err){
            alert(err.toString())
        }
     }

    closeControlPanel = () => {
      this._drawer.close()
    };
    openControlPanel = () => {
      this._drawer.open()
    };
    Menu(){
        return(
          <View>
            <Text>{firebase.auth().currentUser.email}</Text>
          </View>
        )
    }
    render(){
        return(
          <Drawer
           openDrawerOffset={0.7}
           tapToClose={true}
           closedDrawerOffset={-3}
           ref={(ref) => this._drawer = ref}
           content={this.Menu()}
           >
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                  <TouchableOpacity onPress={()=>this.openControlPanel()}>
                    <Image source={require("../../images/Menu.png")} style={styles.titleImage} />
                  </TouchableOpacity>
                  <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}> YourProject</Text>
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
          </Drawer>
        )
    }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
