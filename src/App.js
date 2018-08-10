import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Navigator from './navigation/Navigator';
const App = () => (
  <Provider store={configureStore()}>
    <Navigator />
  </Provider>
)
 
export default App;
