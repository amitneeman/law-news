import React from 'react';
import styled from 'styled-components';
import Article from './Article';
import _ from 'lodash';
import HeaderArticle from './HeaderArticle';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native';

const Container = styled.View`
    margin-top: 20px;
    max-width: 90%;
    min-width: 90%;
`
const Header = styled.Text`
font-weight: bold;
font-size: 20;
width: 100%;
text-align: right;
`
const HeaderWrapper = styled.View`
    
    padding: 20px;
    margin-bottom: 10px;
`

const MoveToAllArticles = styled.Text`
    width: 100%;
    text-align: right;
`

const getArticleList = (articles,articlesNumber) => {
    const partitioned = _.partition(articles, (article) => {
        return article.categories['שער'];
    });
    
    let headers = partitioned[0].map((header) => {
        return <HeaderArticle article={header} key={header.ID} />
    })

    let regulars = partitioned[1].map((article) => {
        return <Article key={article.ID} article={article} />
    })

    headers = headers.splice(0,articlesNumber);
    regulars = regulars.splice(0,articlesNumber);

    return [...headers ,...regulars];
}

const Category = ({name,articles,navigation,articlesNumber}) => {
    return (
        <Container>

            {getArticleList(articles,articlesNumber)}
            <TouchableOpacity onPress={() => {
                navigation.navigate('SingleCategory',{
                    category: {
                        name,
                        articles
                    }
                })
            }}>
                <MoveToAllArticles> עוד מ{name}...</MoveToAllArticles>
            </TouchableOpacity>
        </Container>
    )
}

export default withNavigation(Category);