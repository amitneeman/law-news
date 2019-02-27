import React, { Component } from 'react';
import {Dimensions,Text} from 'react-native';
import {connect} from 'react-redux';
import Hamburger from 'react-native-animated-hamburger';
import {toggleMenu} from '../store/reducers/ui/actions';
import styled from 'styled-components';

const Container = styled.View`
flex: 1
margin-top: 10
`

const ButtonContainer = styled.View`
    padding: 5px;
    padding-bottom: 8px;
`

class HamburgerMenu extends Component {
    state = {
        isActive: false
    }

    toggleMenu = () => {
        this.props.toggleMenu(this.props.isActive);
    }

    render() {
        return (
            <Container>
                <ButtonContainer>
                <Hamburger 
                active={this.props.isActive}
                color={"white"}
                onPress={this.toggleMenu}
                />
                </ButtonContainer>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isActive: state.ui.sideBarOpen
    }
}

export default connect(mapStateToProps,{toggleMenu})(HamburgerMenu);