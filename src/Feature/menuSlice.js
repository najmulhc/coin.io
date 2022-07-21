import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu", 
    initialState: {
        value:false
    }, 
    reducers: {
        displayMenu: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { displayMenu } = menuSlice.actions;
export default menuSlice.reducer;