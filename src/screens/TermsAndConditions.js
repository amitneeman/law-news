import React, { Component } from 'react';
import { View , WebView} from 'react-native'


class TermsAndConditions extends Component {
    static navigationOptions = (props) => ({
        title: `תנאי שימוש`,
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: '#af2a1c',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1
        },

    });
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
            <WebView 
                source={{uri: `https://drive.google.com/file/d/0B1HYzBoMHHiZSUFpX3NFdTRxb3RVWEN4WS12Snl5V3hJRzNJ/view`}}
                />
            </View>
        );
    }
}


export default TermsAndConditions;