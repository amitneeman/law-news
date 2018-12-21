import React, { Component } from 'react';
import { WebView } from 'react-native';

class ArticleViewer extends Component {
    render() {
        
        return (
                <WebView
                useWebKit={true} 
                source={{uri: `https://law-news.firebaseapp.com/?article=${this.props.id}`}}
                />
        );
    }
}

export default ArticleViewer;