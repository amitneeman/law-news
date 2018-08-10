import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import ArticleScreen from '../screens/ArticleScreen';
import SingleCategory from '../screens/SingleCategory';
const RootStack = createStackNavigator(
  {
    MainScreen: MainScreen,
    ArticleViewer: ArticleScreen,
    SingleCategory: SingleCategory
  },
  {
    initialRouteName: "MainScreen"
  }
);
  
const Navigator = () => (
    <RootStack />
)

export default Navigator;