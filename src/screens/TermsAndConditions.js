import React, { Component } from 'react';
import { View } from 'react-native'
import PDFReader from 'rn-pdf-reader-js';


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
            <PDFReader 
                source={{uri: `https://lawnews385264377.files.wordpress.com/2019/02/d7aad7a0d790d799-d7a9d799d79ed795d7a9.pdf`}}
                />
            </View>
        );
    }
}


export default TermsAndConditions;