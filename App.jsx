import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import AppContainer from './src/routes';


export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <AppContainer />
    </Provider>
  );
}
