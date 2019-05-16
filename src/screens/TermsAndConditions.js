import React, { Component } from 'react';
import { View , WebView} from 'react-native'
import terms from '../resources/termsOfUse';


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
        console.log(terms);
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
            <WebView source={{html: terms}} />
            </View>
        );
    }
}


export default TermsAndConditions;