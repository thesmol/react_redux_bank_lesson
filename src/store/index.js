import { configureStore } from '@reduxjs/toolkit';
import { cashReducer } from './cashReducer';
import { castomerReducer } from './castomerReducer';
import { countReducer } from './countReducer';
import { userReducer } from './userReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';


// 1. создаем sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
    cash: cashReducer,
    customers: castomerReducer,
    countReducer,
    userReducer,
};

// передаем sagaMiddleware вторым свойством в configureStore
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});


/** 
 * Создаем Middleware
 * Запускаем его
 * Передаем туда параметром rootWatcher, который следит за остальными watchers
 * Вотчер следит за action
 * теперь этот action вызывается по нажатию на кнопку
*/
sagaMiddleware.run(rootWatcher);
