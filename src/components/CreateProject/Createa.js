import React,{Component} from "react";
import {
    Text,TextInput,TouchableOpacity,View,ScrollView,ListView,Image
}from "react-native";
import {Actions} from"react-native-router-flux"
import * as firebase from "firebase";
import styles from "./styles.js"

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from '../../actions';
var items=[
     "Ardunio 101",
     "Ardunio Due",
     "Ardunio Leonardo",
     "Ardunio Mega",
     "Ardunio Micro",
     "Ardunio Mini",
     "Ardunio MKR1000",
     "Ardunio Nano",
     "Ardunio BBC Micro:bit",
]
var ktra=true;
var e;
class Createa extends React.Component{
    constructor(props){
        super(props);
        e=this;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            textProject:"",
            textThietBi:"",
            APIKEY:"",
            dataSource: ds.cloneWithRows(items)
       }
    }
    //Ghi dữ liệu lên firebase chỗ User
    async createProject(){
        try{
            if(this.state.textProject!=="" && this.state.textThietBi !== "" ){
                await firebase.database().ref("User/"+firebase.auth().currentUser.uid).push({
                    ProjectName:this.state.textProject,
                    ThietBi:this.state.textThietBi,
                },()=>alert("Tạo Project Thành Công!!"))
                await firebase.database().ref("User/"+firebase.auth().currentUser.uid).on("value",function(snap){
                snap.forEach(function(data){
                    if(data.val().ProjectName === e.state.textProject){
                        e.setState({
                            APIKEY:data.key
                        })
                        Actions.pop();
                        e.props.onSubmitUserRoom({
                            APIKEY:data.key,
                            YourRoom:data.val().ProjectName,
                        });
                    }
                })
            })
            }else{
                alert("Tên project và thiết bị không được bỏ trống.Xin vui lòng kiểm tra lại")
            }
        }catch(err){
            alert(err.toString());
        }
    }
    render(){
        return(
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <TouchableOpacity onPress={()=>Actions.pop()} style={styles.buttonImage}>
                  <Image source={require("../../images/back3.png")} style={styles.iconImage}/>
                </TouchableOpacity >
                <View style={styles.titleViewText}>
                  <Text style={[styles.titleText,{color:"white"}]}>Create Project</Text>
                </View>
              </View>
              <View style={styles.content}>
              <TextInput style={styles.contentInput}
                placeholder="Project Name"
                placeholderTextColor="#3949AB"
                onChangeText={(textProject)=>this.setState({textProject})}
                keyboardType="default"
                autoCapitalize="none"
                value={this.state.textProject}
              />
               <ScrollView style={styles.contentScroll} automaticallyAdjustContentInsets={false} horizontal={false} >

                  <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => <Text style={[styles.contentText]}  onPress={()=>{this.setState({textThietBi:rowData}, alert(rowData))}} >{rowData}</Text>}
                  />
                </ScrollView>
                <TouchableOpacity onPress={()=>{this.createProject()}} style={styles.contentButton}>
                  <Text style={[styles.contentText,{color:"white"}]}>Create Project</Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Createa);
