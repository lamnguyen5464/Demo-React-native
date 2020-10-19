/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// const {createStore} = require('redux');

// const reducer = (state = { value : 0}, action) => {
//     switch(action.type){
//         case 'UP': return { value : state.value + 1};
//     }
//     return state;
// }

// const store = createStore(reducer);
// store.dispatch({type : 'UP'});
// const myState = store.getState();
// console.log(myState);