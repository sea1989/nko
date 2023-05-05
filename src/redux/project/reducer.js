import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
    name: 'project',
    initialState: {
        currentProject: null
    },
    reducers: {
        setCurrentProject: (state, action) => {
            state.currentProject = action.payload
        }
    }
});

export const { setCurrentProject } = projectSlice.actions;
export default projectSlice.reducer;