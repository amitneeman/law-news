import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCategory,getCategories} from '../store/reducers/categories/actions';
import Category from '../components/Category';
import _ from 'lodash';
import {StatusBar,View,Image} from 'react-native'
import {RefreshControl,ActivityIndicator,ScrollView,Text} from 'react-native';
import HamburgerMenu from '../containers/HamburgerMenu';
import CategoriesMenu from '../components/CategoriesMenu';

class MainScreen extends Component {

    static navigationOptions =({navigation}) => {
        return {
            title: 'חדשות המשפט',
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: '#af2a1c',
                height: 60
            },
            headerRight: <HamburgerMenu/>,
            headerLeft: <Image
                style={{marginLeft: 20, marginBottom: 5}}
                source={require("../resources/main_app_icon.png")}
            />,
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
                flex: 1,
                fontSize: 20
            }
        }
    };
    
    state = {
        refreshing: false,
    }

    componentDidMount() {
        this.props.getCategories();
    }

    onRefresh = () => {
        this.setState({
            refreshing: true,
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
                <View>
                    <CategoriesMenu toggleMenu={this.toggleMenu} isActive={this.state.sideBarOpen}/>
                    <ScrollView
                        stickyHeaderIndices={[0]} 
                        contentContainerStyle={{
                        alignItems: 'center',
                        paddingBottom: 20
                        }}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh}
                            />
                    }>
                    <StatusBar
                        barStyle="light-content"
                        hidden={false}
                    />
                        {this.getCategories()}
                    </ScrollView>
                </View>
            )
        }
    }
    getCategories = () => {
        const {categories} = this.props;
        return Object.keys(categories).map( (name,idx) => {
           let color = idx % 2 == 0 ? "#CF031C" : "#1D37A8"
           return <Category articlesNumber={5} key={name} color={color} name={name} articles={categories[name]} />
        });
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