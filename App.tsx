import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import DetailPage from './src/page/detail_page';
import MainPage from './src/page/main_page';
import store from './src/store/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
        
        {/* <MainPage /> */}
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
