import React from 'react';
import {Image,Platform,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components';

const ArticleContainer = styled.View`
    border-color: #eee;
    border-bottom-width: 1;
    padding: 15px;
    flex-direction: row-reverse;
    background-color: white;
    margin-bottom: 10px
    box-shadow: 3px 2px 3px gray;
`;

const ArticleHeader = styled.Text`
    text-align: right;
    font-weight: bold;
    margin-right: 10px;
    font-size: 20px;
    flexWrap: wrap;
`;

const HeaderContainer = styled.View`
flex:1;
flexDirection: row;
justifyContent: flex-end;
`;

const Article = (props) => (
    <TouchableOpacity onPress={() => {props.navigation.navigate('ArticleViewer',{
        articleId: props.article.ID
    })}}>
        <ArticleContainer>
            <Image
                style={{height:  140, width: "50%"}}
                source={{uri: props.article.featured_image}}
            />   
            <HeaderContainer>
                <ArticleHeader>{props.article.title} </ArticleHeader>
            </HeaderContainer>
        </ArticleContainer>
    </TouchableOpacity>
)


export default withNavigation(Article);
