/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/redux/App';
import TestApp from './src/socket/frontend/TestChatApp'
import TestNavigation from './src/navigation/TestNavigation'
import {name as appName} from './app.json';
import TestAnimated from './src/animation/TestAnimated'

AppRegistry.registerComponent(appName, () => TestAnimated);
