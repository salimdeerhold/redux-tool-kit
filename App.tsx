import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import MainPage from './src/page/main_page';
import { store } from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainPage/>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
