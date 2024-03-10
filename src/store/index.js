import { configureStore } from '@reduxjs/toolkit';
import { cashReducer } from './cashReducer';
import { castomerReducer } from './castomerReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = {
    cash: cashReducer,
    customers: castomerReducer,
};

// Настроить store добавив rootReducer
// configureStore вызовет combineReducers самостоятельно
export const store = configureStore({
    reducer: rootReducer,
}, composeWithDevTools);
