import React from 'react';
import {Text,TouchableOpacity,Share as RnShare} from 'react-native';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ShareText = styled.Text`
    color: white;
`

const initializeShare = (id) => {
    RnShare.share({
        message: 'קראתי כתבה מעניינת בחדשות המשפט!',
        url:`https://law-news.firebaseapp.com/?article=${id}&web=true`,
        title: 'שתף'
      }, {
        dialogTitle: 'שתף',
      })
}

// TODO: make button look normal

const Share = (props) => (
    <TouchableOpacity style={{marginRight: 10}} onPress={() => initializeShare(props.articleId)}>
        <ShareText>
        <Ionicons size={40}  name={"ios-share"}/>
        </ShareText>
    </TouchableOpacity>
)

export default Share;