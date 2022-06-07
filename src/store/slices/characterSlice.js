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

export const fetchCharacterById = createAsyncThunk(
    'character/fetchCharacterById',
    async (id, thunkAPI) => {
        try {
            const response = await fetch(`${URL_CHARACTER}/${id}`);
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
        character: {
            name: '',
            species: '',
            gender: '',
            location: '',
            episode: '',
            status: '',
            created: '',
            image: '',
            isLoading: false,
            error: null,
        },
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
        initialCharacter: (state) => {
            state.character.name = '';
            state.character.species = '';
            state.character.gender = '';
            state.character.location = '';
            state.character.episode = '';
            state.character.status = '';
            state.character.created = '';
            state.character.image = '';
            state.character.isLoading = false;
            state.character.error = null;
        }
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
        [fetchCharacterById.pending]: (state) => {
            state.character.isLoading = true;
        },
        [fetchCharacterById.fulfilled]: (state, action) => {
            state.character.name = action.payload.name;
            state.character.species = action.payload.species;
            state.character.gender = action.payload.gender;
            state.character.location = action.payload.location.name;
            state.character.episode = action.payload.episode.length;
            state.character.status = action.payload.status;
            state.character.created = new Date(action.payload.created).toLocaleString()
            state.character.image = action.payload.image;
            state.character.isLoading = false;
        },
        [fetchCharacterById.rejected]: (state, action) => {
            state.character.isLoading = false;
            state.character.error = action.payload.message;
        },
    }
});

export default characterSlice.reducer;

export const {changeSpecies, changeStatus, changeGender, initial, changeName, initialCharacter} = characterSlice.actions;