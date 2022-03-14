import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//REDUX SETUP
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import myCounterReducer from './redux/reducers/counter-reducer';

const rootReducer = combineReducers({myCounterReducer});
const store = createStore(rootReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

