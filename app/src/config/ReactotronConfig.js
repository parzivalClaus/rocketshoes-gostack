import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

import { HOST_IP } from 'react-native-dotenv';

if (__DEV__) {
  const tron = Reactotron.configure({ host: HOST_IP })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  console.tron = tron;

  tron.clear();
}
