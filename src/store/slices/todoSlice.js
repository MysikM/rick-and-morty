import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {id: 1, content: 'eat pizza', status: false},
            {id: 2, content: 'listen to music', status: false},
            {id: 3, content: 'end home work', status: false},
        ],
        filterTodo: [
            {id: 1, content: 'eat pizza', status: false},
            {id: 2, content: 'listen to music', status: false},
            {id: 3, content: 'end home work', status: false},
        ],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
            state.filterTodo = [...state.todos];
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(el => el.id !== action.payload.id);
            state.filterTodo = [...state.todos];
        },
        changeStatusTodo: (state, action) => {
            state.todos = state.todos.map(el => el.id === action.payload.id ? {...el, status: !el.status} : el);
            state.filterTodo = [...state.todos];
        },
        firstLoad: (state, action) => {
            state.todos = [...action.payload];
            state.filterTodo = [...state.todos];
        },
        sortTodo: (state, action) => {
            state.todos = state.filterTodo.filter(el => el.content.includes(action.payload.search))
        },
    }
});

export const {addTodo, removeTodo, changeStatusTodo, firstLoad, sortTodo} = todoSlice.actions;
export default todoSlice.reducer;