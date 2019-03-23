import React from 'react';
import { createStackNavigator,createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import ArticleScreen from '../screens/ArticleScreen';
import SingleCategory from '../screens/SingleCategory';
import TermsAndConditions from '../screens/TermsAndConditions';
import NeemanLawSite from '../screens/NeemanLawSite';
import { Ionicons } from '@expo/vector-icons';
import { Platform, I18nManager } from 'react-native'


const HomeStack = createStackNavigator(
  {
    MainScreen: MainScreen,
    ArticleViewer: ArticleScreen,
    SingleCategory: SingleCategory,
    TermsAndConditions: TermsAndConditions
  },
  {
    initialRouteName: "MainScreen",
  }
); 

// RTL ANDROID
const defaultTabOrder = {
  'לינק לאתר': NeemanLawSite,
  'ראשי': HomeStack

}

const androidLTROrder = {
  'ראשי': HomeStack,
  'לינק לאתר': NeemanLawSite
}

const isRTLAndroid = Platform.OS === 'android' && I18nManager.isRTL;

  
export default createBottomTabNavigator(
  isRTLAndroid ? androidLTROrder : defaultTabOrder,
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'ראשי'){
          iconName = 'md-home'
        } else if(routeName === 'לינק לאתר'){
          iconName = 'md-desktop'
        }
        return <Ionicons style={{marginTop: 10}} name={iconName} size={25} color={tintColor} />;
      },
    }),
    initialRouteName: "ראשי",
    tabBarOptions: {
      activeTintColor: '#af2a1c',
      inactiveTintColor: 'gray'
    },
  }
);
