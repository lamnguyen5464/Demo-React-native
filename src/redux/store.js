import {reducer} from './reducer';
import { createStore } from 'redux';

//store
export const store = createStore(reducer);