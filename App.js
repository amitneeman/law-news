import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import Navigator from './src/navigation/Navigator';
import { Platform, I18nManager } from 'react-native'
import Expo from 'expo';
import { registerForPushNotificationsAsync } from './src/utils/notifications'

class App extends Component {
  componentWillMount() {
    const isRTLAndroid = Platform.OS === 'android' && I18nManager.isRTL;

    if (isRTLAndroid) {
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
      Expo.Updates.reload();
    }

  }
  componentDidMount() {
    registerForPushNotificationsAsync();
  }
  render() {
    return (
      <Provider store={configureStore()}>
        <Navigator />
      </Provider>
    );
  }
}
export default App;
