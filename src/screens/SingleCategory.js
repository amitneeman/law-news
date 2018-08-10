import React, { Component } from 'react';
import Category from '../components/Category';
import {Text,ScrollView} from 'react-native';

class SingleCategory extends Component {
    static navigationOptions = (props) =>({
        title: `כל הכתבות מ${props.navigation.getParam('category').name}`,
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: '#af2a1c',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign:'center', 
            alignSelf:'center',
            flex:1
        },
        
      });
    state = {
        category: null
    }
    componentDidMount() {
        let category = this.props.navigation.getParam('category');
        this.setState({
            category
        })
    }
    render() {
        if(!this.state.category){
            return <Text>שגיאה בהצגת הקטגוריה</Text>
        }
        const {category} = this.state;
        return (
            <ScrollView contentContainerStyle={{
                alignItems: 'center'
            }}>
                <Category articlesNumber={100} name={category.name} articles={category.articles}/>
            </ScrollView>
        );
    }
}
export default SingleCategory;