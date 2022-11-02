import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const BASE_URL = 'http://localhost:3000/greetings';

export const getGreetingAsync = createAsyncThunk(
    'fetchGreeting', async () => {
        const response = await fetch(BASE_URL);
        const { greeting } = await response.json();
        return greeting;
    },
);

export const greetingSlice = createSlice({
    name: 'greetings',
    initialState: {
        greet: '',
        loading: false,
        error: false,
    },
    reducers: {},
    extraReducers: {
        [getGreetingAsync.fulfilled]: (state, action) => {
            const newState = {
                ...state,
                greet: action.payload,
            };
            return newState;
        },
    },
});

export default greetingSlice.reducer;