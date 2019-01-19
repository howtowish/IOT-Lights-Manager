import React,{Component} from "react";
import {
    View,TouchableOpacity,StyleSheet,Text,ListView,Switch,Image,ScrollView
}from "react-native";
import {Actions} from "react-native-router-flux";
import * as firebase from "firebase";
import styles from "./styles"

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import * as selectors from '../../selectors';
import SideMenu from "./SideMenu/SideMenu";
import Drawer from 'react-native-drawer'
var items=[];
var e;
class UserRoom extends React.Component{
    constructor(props){
        super(props);
        e=this;
        items=[];
        this.state={
            dataSource:new ListView.DataSource({rowHasChanged:( r1 , r2 ) => r1 !== r2})
        }
    }
    componentWillMount(){

          firebase.database().ref("User/"+firebase.auth().currentUser.uid+"/"+this.props.APIKEY+"/Control").on("value",function(snap){
                items=[];
                snap.forEach(function(data){
                    items.push(
                        {
                            key:data.key,
                            data:data.val()
                        }
                    );
                });
                if(items.length>0)
                    e.setState({dataSource:e.state.dataSource.cloneWithRows(items)});
            });
    }

    renderRow(data){
        return(
            <View style={{flexDirection:"row"}} >
                <Image source={require("../../images/On.png")} style={{height:30,width:30,alignSelf:"center"}} />
                  <Text style={{alignItems:"center",fontSize:19,marginLeft:10,color:"black"}} >{data.data.Name}</Text>
                 <Switch
                     onValueChange={(value) => {firebase.database().ref("User/"+firebase.auth().currentUser.uid+"/"+this.props.APIKEY+"/Control/"+data.key).update({
                            output:!data.data.output
                        })}}
                      style={{marginBottom: 10,marginLeft:15}}
                      value={data.data.output} />
            </View>
        )
    }
     async addButton(){
       this.props.onSubmitCreateButton({APIKEY:this.props.APIKEY});
        try{
            await firebase.database().ref("User/"+firebase.auth().currentUser.uid+"/"+this.props.APIKEY+"/Control").on("value",function(snap){
                items=[];
                snap.forEach(function(data){
                    items.push({
                        key:data.key,
                        data:data.val(),
                    });
                });
                if(items.length>0)
                    e.setState({dataSource:e.state.dataSource.cloneWithRows(items)});
            });
        }catch(err){
            alert(err.toString());
        }
    }
    //Delete API key trong auth
//     deleteButton(){

//     //    try{
//     //     firebase.database().ref("User/"+firebase.auth().currentUser.uid).child(this.props.APIKEY).remove();
//     //     alert("Deleted!!");
//     //     Actions.main();
//     //     }catch(err){
//     //        alert("Can't delete project");
//     //    }
// }
    Menu(){
        return(
          <View style={styles.MenuContainer}>
            <Image source={require("../../images/backgroundRoom5.jpg")} style={styles.titleBackgroundImage}>
              <Image source={require("../../images/Home.png")} style={{height:70,width:70,alignSelf:"stretch"}}/>
              <Text style={styles.tileText}>{this.props.YourRoom}</Text>
              <Text style={[styles.tileText,{ fontStyle:'italic'}]}>{this.props.APIKEY}</Text>
            </Image>
            <View style={styles.content}>
              <TouchableOpacity onPress={()=>{this.addButton()}} style={[styles.listviewButton,{marginTop:30}]}>
                <Image source={require("../../images/create.png")} style={styles.buttonImage}/>
                <Text style={styles.buttonText}>Create Switch</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.onSubmitDeleteButton({APIKEY:this.props.APIKEY})} style={styles.listviewButton}>
                <Image source={require("../../images/delete.png")} style={styles.buttonImage}/>
                <Text style={styles.buttonText}>Delete Switch</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>Actions.pop()} style={styles.listviewButton}>
                <Image source={require("../../images/exitRoom.png")} style={styles.buttonImage}/>
                <Text style={styles.buttonText}>Exit Room</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
    }
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render(){
        return(
          <Drawer
           openDrawerOffset={0.25}
           tapToClose={true}
           closedDrawerOffset={-3}
           ref={(ref) => this._drawer = ref}
           content={this.Menu()}
           >
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                  <TouchableOpacity onPress={()=>this.openControlPanel()} style={{height:40,width:40,alignSelf:"center"}}>
                    <Image source={require("../../images/Menu.png")} style={styles.titleImage} />
                  </TouchableOpacity>
                  <View style={styles.titleTextContainer}>
                    <Text style={[styles.titleText,{color:"white"}]}> YourRoom</Text>
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
        );
    }
}
const mapStateToProps = (state) => {
  return {
    APIKEY: selectors.getKey(state),
    YourRoom:selectors.getYourRoom(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserRoom);
