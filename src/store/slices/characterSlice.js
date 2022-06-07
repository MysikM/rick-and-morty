import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {URL_CHARACTER} from '../../data/data';

export const loadCharacters = createAsyncThunk(
    'character/loadCharacters',
    async ({page = 1, status , species , gender, name }, thunkAPI) => {
        try{
            const response = await fetch(`${URL_CHARACTER}?page=${page}${status ? `&status=${status}` : ''}${species ? `&species=${species}` : ''}${gender ? `&gender=${gender}` : ''}${name ? `&name=${name}` : ''}`);
            const data = await response.json();
            if(data?.error) {
                throw new Error(data?.error);
            }
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        characters: [],
        pages: null,
        count: null,
        isLoading: false,
        error: null,
        species: '',
        status: '',
        gender: '',
        name: '',
    },
    reducers: {
        changeSpecies: (state, action) => {
            state.species = action.payload.val;
            state.characters = [];
            state.pages = null;
        },
        changeStatus: (state, action) => {
            state.status = action.payload.val;
            state.characters = [];
            state.pages = null;
        },
        changeGender: (state, action) => {
            state.gender = action.payload.val;
            state.characters = [];
            state.pages = null;
        },
        changeName: (state, action) => {
            state.name = action.payload;
            state.characters = [];
            state.pages = null;
        },
        initial: (state) => {
            state.characters= [];
            state.pages = null;
            state.count = null;
            state.isLoading = false;
            state.error = null;
            state.species = '';
            state.status = '';
            state.gender = '';
            state.name = '';
        },
    },
    extraReducers: {
        [loadCharacters.pending]: (state) => {
            state.isLoading = true;
        },
        [loadCharacters.fulfilled]: (state, action) => {
            state.characters = [...state.characters,  ...action.payload?.results];
            state.pages = action.payload.info.pages;
            state.count = action.payload.info.count;
            state.isLoading = false;
        },
        [loadCharacters.rejected]: (state, action) => {
            console.log(action.payload.message);
            state.isLoading = false;
            state.error = action.payload.message;
        },
    }
});

export default characterSlice.reducer;

export const {changeSpecies, changeStatus, changeGender, initial, changeName} = characterSlice.actions;