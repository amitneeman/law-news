import React, { Component } from 'react';
import {WebView,View,StatusBar} from 'react-native'


class NeemanLawSite extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: "#670004"}}>
            <WebView 
                source={{uri: `http://neemanlaw.co.il/`}}
                />
            </View>
        );
    }
}

export default NeemanLawSite;