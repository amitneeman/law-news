import React, { Component } from 'react';
import {Dimensions,Text} from 'react-native';
import Hamburger from 'react-native-hamburger';
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
        let isActive = !this.state.isActive
        this.setState({isActive});
        this.props.onPress(isActive);
    }

    render() {
        return (
            <Container>
                <ButtonContainer>
                <Hamburger 
                active={this.state.isActive}
                color={"white"}
                onPress={this.toggleMenu}
                />
                <Text>{this.props.counter}</Text>
                </ButtonContainer>
            </Container>
        );
    }
}

export default HamburgerMenu;