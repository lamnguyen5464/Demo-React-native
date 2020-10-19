/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/restful/App';
import TestApp from './src/socket/frontend/TestChatApp'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TestApp);
