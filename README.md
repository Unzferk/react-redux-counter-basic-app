# For a quick react redux app follow instructions

-npx create-react-app app
-npm install redux react-redux --save

Indexfile:
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import myCounterReducer from './redux/reducers/counter-reducer';

const rootReducer = combineReducers({myCounterReducer});
const store = createStore(rootReducer);

REDUX FOLDER
Create Actions in actions folder
Create Reducers in reducers folder