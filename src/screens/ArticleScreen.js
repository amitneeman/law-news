import React, { Component } from 'react';
import ArticleViewer from '../components/ArticleViewer';
import Share from '../components/Share';

class ArticleScreen extends Component {
    state = {

    }
    static navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                backgroundColor: '#af2a1c'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerRight: (
                <Share articleId={navigation.getParam('articleId')}/>
            )
        }
      }


    componentDidMount() {
        const id = this.props.navigation.getParam('articleId', 'NO-ID');
        this.setState({
            id
        })
    }
    render() {
        return (
            <ArticleViewer id={this.state.id} />
        );
    }
}

export default ArticleScreen;