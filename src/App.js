import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Navigator from './navigation/Navigator';
import {Platform,I18nManager} from 'react-native'
import Expo from 'expo';


const isRTLAndroid = Platform.OS === 'android' && I18nManager.isRTL;

if(isRTLAndroid){
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);
  Expo.Util.reload();
}

const App = () => (
  <Provider store={configureStore()}>
    <Navigator />
  </Provider>
)
 
export default App;
