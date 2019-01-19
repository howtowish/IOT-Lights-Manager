import React,{Component} from "react";
import {
    StyleSheet,
}from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backgroundImage:{
      flex:1,
      alignSelf:'stretch',
      width:null,
      justifyContent:'center',
    },
    content:{
        alignItems:'center',
    },
    logo:{
        color:'white',
        fontSize:30,
        fontStyle:'italic',
        fontWeight:'bold',
        textShadowColor:'#252525',
        textShadowOffset:{width:2,height:2},
        textShadowRadius:15,
        marginBottom:20,
    },
    inputContainer:{
        margin:20,
        marginBottom:0,
        padding:20,
        paddingBottom:10,
        alignSelf:'stretch',
        borderWidth:1,
        borderColor:"#fff",
        backgroundColor:'rgba(255,255,255,0.2)',
    },
    input:{
        fontSize:16,
        height:40,
        padding:10,
        marginBottom:10,
        backgroundColor:"rgba(255,255,255,1)",
    },
    buttonContainer:{
        alignSelf:'stretch',
        margin:20,
        padding:20,
        borderColor:"#fff",
        borderWidth:1,
        backgroundColor:"rgba(255,255,255,0.6)",

    },
    buttonText:{
        fontSize:16,
        fontWeight:"bold",
        textAlign:"center",
    }
})
export default styles
