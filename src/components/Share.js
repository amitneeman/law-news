import React from 'react';
import {Text,TouchableOpacity,Share as RnShare} from 'react-native';
import styled from 'styled-components';

const ShareText = styled.Text`
    color: white;
    font-size: 20px;
`

const initializeShare = (id) => {
    RnShare.share({
        message: 'קראתי כתבה מעניינת בחדשות המשפט!',
        url:`https://law-news.firebaseapp.com/?article=${id}`,
        title: 'שתף'
      }, {
        dialogTitle: 'שתף',
      })
}

const Share = (props) => (
    <TouchableOpacity style={{
        margin: 10
    }} onPress={() => initializeShare(props.articleId)}>
        <ShareText>שתף</ShareText>
    </TouchableOpacity>
)

export default Share;