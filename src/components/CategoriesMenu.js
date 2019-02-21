import React,{Component} from 'react';
import {TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Container = styled.View`
background-color: #eee;
width: 60%;
position: absolute;
z-index: 999;
align-self: flex-end;
padding-right: 10px;
flex:1;
align-items: flex-end;
box-shadow: 0 0 5px black;
border-top-width: 0;
padding-bottom: 10px;
`
const Category = styled.Text`
color: #403f3f;
font-size: 20;
margin-top: 10px;
width: 100%
text-align: right;
font-weight: bold;

`

class CategoriesMenu extends Component{
    constructor(props){
        super(props)
    }

    getCategories = () => {
        if(!this.props.categories){
            return <View></View>
        }

        const {categories,navigation} = this.props;
        return Object.keys(categories).map( (name) => (
            <TouchableOpacity key={name} onPress={() => {
                navigation.navigate('SingleCategory',{
                    category: {
                        name,
                        articles: categories[name]
                    }
                })
            }}>
                <Category style={this.props.isActive ? {} : {display: 'none', height: 0, color: "#00000000"}}>{name}</Category>
            </TouchableOpacity>
        ));
    }

    render(){
        const props = this.props;
        return (
            <Container style={props.isActive ? {} : {display: 'none', height: 0, backgroundColor: "#00000000"}}>
                {this.getCategories()}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

const Menu = connect(mapStateToProps,{})(CategoriesMenu);

export default withNavigation(Menu);
