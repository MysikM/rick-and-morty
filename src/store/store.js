import {configureStore} from "@reduxjs/toolkit";
import characterReducer from './slices/characterSlice';
import todosReducer from './slices/todoSlice';

export const store = configureStore({
    reducer: {
        'character': characterReducer,
        'todos': todosReducer
    }
})