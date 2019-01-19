import React, { Component } from 'react';

import {
    AsyncStorage,
    View,
    Text,
    AppState

} from 'react-native';

import * as firebase from "firebase";
const config= {
    apiKey: "AIzaSyBPlxKa0UIiJNb-dP0dxPin8bGGxOzbA7E",
    authDomain: "ardunio-c940c.firebaseapp.com",
    databaseURL: "https://ardunio-c940c.firebaseio.com",
    storageBucket: "ardunio-c940c.appspot.com"
};
firebase.initializeApp(config);
import { Provider } from 'react-redux'
import createStore from '../reducers/create'
import Router from './Router'
//import '../configs/firebase.config';
//import '../configs/styles.config';

const TAG = 'router';
const store = createStore();


class Kernel extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}


export default Kernel;
