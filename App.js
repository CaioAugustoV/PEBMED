import 'react-native-gesture-handler';
import * as React from 'react';
import Router from './src/routes';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './src/components/loading';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {(bootstrapped) => {
        if (!bootstrapped) return <Loading visible={!bootstrapped} />;
        if (bootstrapped) return <Router />;
      }}
    </PersistGate>
  </Provider>
);

export default App;
