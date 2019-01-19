import React,{Component} from "react";
import {StyleSheet} from "react-native";

export const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
    },
    titleContainer:{
      flex:1,
      backgroundColor:"#00BCD4",
      flexDirection:"row",
    },
    iconImage:{
      height:30,
      width:30,
      alignSelf:"stretch",
    },
    buttonImage:{
      height:30,
      width:30,
    },
    titleText:{
        fontSize:24,
        fontWeight:"bold",
        textAlignVertical:"center",
    },
    titleViewText:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    content:{
      flex:11,
      alignItems:"center",
    },
    contentInput:{
      marginLeft:30,
      marginTop:30,
      fontSize:17,
      alignSelf:"stretch",
    },
    contentScroll:{
      padding:30,
      alignSelf:"stretch",
      flex:1,
    },
    contentText:{
      fontSize:20,
      color:"black"
    },
    contentButton:{
      margin:30,
      padding:5,
      borderRadius:10,
      backgroundColor:"#1E88E5",
    }
})
export default styles
