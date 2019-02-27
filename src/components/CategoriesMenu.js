import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MailComposer } from 'expo';
import { toggleMenu } from '../store/reducers/ui/actions';


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
const MenuItem = styled.Text`
color: #403f3f;
font-size: 20;
margin-top: 10px;
width: 100%
text-align: right;
font-weight: bold;

`

class CategoriesMenu extends Component {
    constructor(props) {
        super(props)
    }

    openMailModal = () => {
        MailComposer.composeAsync({
            recipients: ["app@lawnewsgroup.co.il"],
            subject: "יצירת קשר עם מפעילי חדשות המשפט"
        })
    }

    getCategories = () => {
        if (!this.props.categories) {
            return <View></View>
        }

        const { categories, navigation } = this.props;
        return Object.keys(categories).map((name) => (
            <TouchableOpacity key={name} onPress={() => {
                this.props.toggleMenu(true);
                navigation.navigate('SingleCategory', {
                    category: {
                        name,
                        articles: categories[name]
                    }
                })
            }}>
                <MenuItem style={this.props.isActive ? {} : { display: 'none', height: 0, color: "#00000000" }}>{name}</MenuItem>
            </TouchableOpacity>
        ));
    }

    openTerms = () => {
        const { navigation } = this.props;
        navigation.navigate('TermsAndConditions')
    }

    render() {
        const props = this.props;
        return (
            <Container style={props.isActive ? {} : { display: 'none', height: 0, backgroundColor: "#00000000" }}>
                {this.getCategories()}
                <TouchableOpacity onPress={() => {
                    this.openMailModal(); this.props.toggleMenu(true);
                }}>
                    <MenuItem style={this.props.isActive ? {} : { display: 'none', height: 0, color: "#00000000" }}>צור קשר</MenuItem>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.openTerms(); this.props.toggleMenu(true);
                }}>
                    <MenuItem style={this.props.isActive ? {} : { display: 'none', height: 0, color: "#00000000" }}>תנאי שימוש</MenuItem>
                </TouchableOpacity>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        isActive: state.ui.sideBarOpen
    }
}

const Menu = connect(mapStateToProps, { toggleMenu })(CategoriesMenu);

export default withNavigation(Menu);
