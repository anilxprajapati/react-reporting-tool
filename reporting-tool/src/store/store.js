// store.js
import { configureStore } from '@reduxjs/toolkit';
import joinReducer from '../features/joinSlice';

const store = configureStore({
    reducer: {
        join: joinReducer
    }
});

export default store;
