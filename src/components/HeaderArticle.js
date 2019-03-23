import React from 'react';
import {View,Image,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components';
// ANDROID RTL
import { I18nManager,Platform } from 'react-native'
const isRTLAndroid = Platform.OS === 'android' && I18nManager.isRTL;

const MainArticleHeader = styled.Text`
    text-align: ${isRTLAndroid ? "left" : "right"};
    margin-${isRTLAndroid ? "left" : "right"}: 10;
    margin-top: 10;
    font-size: 30;
    font-weight: bold;
    margin-bottom: 32;
    background-color: white;
`;

const MainArticleContainer = styled.View`
    background-color: white;
    margin-bottom: 10px;
    box-shadow: 3px 2px 3px gray;
`

const HeaderArticle = (props) => (
    <TouchableOpacity onPress={() => {props.navigation.navigate('ArticleViewer',{
        articleId: props.article.ID
    })}}>
        <MainArticleContainer>
            <Image
                style={{height:  200, width: "100%"}}
                source={{uri: props.article.featured_image}}
            />
            <MainArticleHeader> {props.article.title} </MainArticleHeader>
            
        </MainArticleContainer>
    </TouchableOpacity>
)


export default withNavigation(HeaderArticle);