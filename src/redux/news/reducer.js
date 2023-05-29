import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        currentProject: null
    },
    reducers: {
        setCurrentNews: (state, action) => {
            state.currentNews = action.payload
        }
    }
});

export const { setCurrentNews} = newsSlice.actions;
export default newsSlice.reducer;