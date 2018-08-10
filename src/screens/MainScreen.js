import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCategory,getCategories} from '../store/reducers/categories/actions';
import styled from 'styled-components';
import Category from '../components/Category';
import _ from 'lodash';

import {RefreshControl,View,Text,ActivityIndicator,ScrollView} from 'react-native';

class MainScreen extends Component {
    static navigationOptions = {
        title: 'חדשות המשפט',
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
        
      };
    
    state = {
        refreshing: false
    }

    onRefresh = () => {
        this.setState({
            refreshing: true
        })

        this.props.getCategories(this.finishRefresh);
    }

    finishRefresh = () => {
        this.setState({
            refreshing: false
        })
    }

    getContent = () => {
        if(_.isEmpty(this.props.categories)){
            return (
                    <ActivityIndicator style={{
                        marginTop: 10
                    }} size="large" color="#af2a1c" />
            )

        }else {
            return (
                <ScrollView contentContainerStyle={{
                    alignItems: 'center'
                }}
                refreshControl={
                    <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    />
                }>
                    {this.getCategories()}
                </ScrollView>
            )
        }
    }

    getCategories = () => {
        const {categories} = this.props;
        return Object.keys(categories).map( (name) => {
           return <Category articlesNumber={5} key={name} name={name} articles={categories[name]} />
        });
    }

    componentDidMount(){
        this.props.getCategories();
    }

    render() {
        return (
                this.getContent()
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps,{getCategory,getCategories})(MainScreen);