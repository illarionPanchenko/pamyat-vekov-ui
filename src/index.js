import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function reducer(state = 'RU', action) {
    if (action.type === 'changeLang') {
        return action.payload
    }
    return state
}
const store = createStore(reducer);
export const action = (lang) => {
   return { type: 'changeLang', payload: lang }
};

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
