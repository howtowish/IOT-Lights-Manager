import React,{Component} from "react";
import {StyleSheet} from "react-native";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ecf0f1",
    },
    titleContainer:{
        flex:1,
        backgroundColor:"#00BCD4",
        flexDirection:"row",
    },
    titleImage:{
      alignSelf:"center",
      width:40,
      height:40,
    },
    titleTextContainer:{
      flex:10,
      alignItems:"center",
      justifyContent:"center",
    },
    titleText:{
        fontSize:24,
        fontWeight:"bold",
        textAlignVertical:"center",
    },
    content:{
        flex:11
    },
    contentScrollView:{
      marginTop:10,
      paddingTop:10,
    },
    listviewButton:{
      flexDirection:"row",
      marginTop:10,
      marginLeft:10,
      backgroundColor:"rgba(255,255,255,0.6)",
    },
    buttonText:{
      fontSize:15,
      color:"black",
    },
    buttonImage:{
      height:40,
      width:40,
    },
    MenuContainer:{
      flex:1,
      backgroundColor:"#ecf0f1"
    },
    titleBackgroundImage:{
      alignItems:"center",
      flex:3,
      alignSelf:"stretch",
      width:null,
    },
    tileText:{
      alignSelf:"stretch",
      fontSize:16,
      fontWeight:"bold",
      color:"white",
    },

})
export default styles;
