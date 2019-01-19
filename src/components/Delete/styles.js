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
      width:50,
      height:50,
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
      marginLeft:10,
    },
    buttonText:{
      fontSize:15,
      color:"black",
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
    tileText:{
      alignSelf:"stretch",
      fontSize:16,
      fontWeight:"bold",
      color:"white",
    },

})
export default styles;
