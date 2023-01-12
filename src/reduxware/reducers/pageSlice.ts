import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "types";

const initialState = { current: 1 };

const page = createSlice({
    name: "page",
    initialState,
    reducers: {
        showNextPage(state) {
            state.current++;
        },
        showPreviousPage(state) {
            state.current--;
        },
        showCertainPage(state, action) {
            state.current = action.payload;
        },
    },
});
export default page.reducer;
export const { showNextPage, showPreviousPage, showCertainPage } = page.actions;
export const getCurrentPageNumber = (state: RootStateType) => state.page.current;
