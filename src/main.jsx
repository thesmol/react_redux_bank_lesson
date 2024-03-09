import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


// присваивается в тот момент, когда пользователь открыл приложение
const defaultState = {
  cash: 0,
}

/**
 * функция принимающая состояние и action, всегда возвращает новый объект состояние
 * @date 3/9/2024 - 11:04:53 PM
 *
 * @param {{ cash: number; }} [state=defaultState]
 * @param {*} action
 * @returns {{ cash: any; }}
 */
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // определяем как action будет изменять состояние
    case "ADD_CASH": {
      return { ...state, cash: state.cash + action.payload };
    }

    case "GET_CASH": {
      return { ...state, cash: state.cash - action.payload };
    }
    default: return state;
  }
}

// reducer передается в Store, после чего от стора State передается к компонентам
const store = configureStore({ reducer });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
