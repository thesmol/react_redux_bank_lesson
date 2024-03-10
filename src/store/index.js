import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { cashReducer } from './cashReducer';
import { castomerReducer } from './castomerReducer';
import { countReducer } from './countReducer';
import { userReducer } from './userReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import { countWatcher } from '../saga/countSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
    cash: cashReducer,
    customers: castomerReducer,
    countReducer,
    userReducer,
};

// Настроить store добавив rootReducer
// configureStore вызовет combineReducers самостоятельно
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});


/** 
 * Создаем Middleware
 * Запускаем его
 * Передаем туда параметром watcher
 * Вотчер следит за action
*/
sagaMiddleware.run(countWatcher);
