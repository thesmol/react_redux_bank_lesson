import { configureStore } from '@reduxjs/toolkit';
import { cashReducer } from './cashReducer';
const rootReducer = {
    cash: cashReducer,
};

// Настроить store добавив rootReducer
// configureStore вызовет combineReducers самостоятельно
export const store = configureStore({
    reducer: rootReducer,
}, composeWithDevTools);
