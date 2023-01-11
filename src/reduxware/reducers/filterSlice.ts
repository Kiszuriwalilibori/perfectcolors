import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../../types";

const initialState = { value: null as unknown as number };

const filterId = createSlice({
    name: "filterId",
    initialState,
    reducers: {
        setFilterId(state, action) {
            state.value = action.payload;
        },
    },
});
export default filterId.reducer;
export const { setFilterId } = filterId.actions;
export const getId = (state: RootStateType) => state.id.value;
