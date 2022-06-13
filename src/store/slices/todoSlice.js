import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {id: 1, content: 'eat pizza', status: false},
            {id: 2, content: 'listen to music', status: false},
            {id: 3, content: 'end home work', status: false},
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(el => el.id !== action.payload.id);
        },
        changeStatusTodo: (state, action) => {
            state.todos = state.todos.map(el => el.id === action.payload.id ? {...el, status: !el.status} : el);
        },
        firstLoad: (state, action) => {
            state.todos = [...action.payload];
        },
    }
});

export const {addTodo, removeTodo, changeStatusTodo, firstLoad} = todoSlice.actions;
export default todoSlice.reducer;