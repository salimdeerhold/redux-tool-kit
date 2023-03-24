import React from 'react';
import {Provider} from 'react-redux';
import UserPage from './src/page/user_page';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <UserPage />
    </Provider>
  );
};

export default App;
