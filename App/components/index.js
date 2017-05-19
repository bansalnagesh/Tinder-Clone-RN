/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {Navigator, View} from "react-native";

import Home from "./home";
import Messages from "./messages";
import Profile from "./profile";
import Login from "./login";


export default class Index extends Component {
    constructor(props) {
        super(props)

    }

    renderScene(route, navigator) {
        var {state, actions} = this.props;
        var routeId = route.id;


        if (routeId === 'login') {
            return (
                <Login/>
            );
        }
        if (routeId === 'home') {
            return (
                <Home
                    {...this.props}
                    userData={route.userData}
                    navigator={navigator}/>
            );
        }
        if (routeId === 'messages') {
            return (
                <Messages
                    {...this.props}
                    userData={route.userData}
                    navigator={navigator}/>
            );
        }
        if (routeId === 'profile') {
            return (
                <Profile
                    {...this.props}
                    userData={route.userData}
                    navigator={navigator}/>
            );
        }
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <Navigator
                    style={{flex: 1}}
                    ref={'NAV'}
                    initialRoute={{id: 'login', name: 'login'}}
                    renderScene={this.renderScene.bind(this)}/>
            </View>
        )
    }
}

