import React from 'react';
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import ArticleScreen from '../screens/ArticleScreen';
import SingleCategory from '../screens/SingleCategory';
import NeemanLawSite from '../screens/NeemanLawSite';
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeStack = createStackNavigator(
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
  <HomeStack />
)
export default createBottomTabNavigator(
  {
    'ראשי': HomeStack,
    'לינק לאתר': NeemanLawSite
  },
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
    tabBarOptions: {
      activeTintColor: '#af2a1c',
      inactiveTintColor: 'gray',
    },
  }
);
//export default Navigator;
