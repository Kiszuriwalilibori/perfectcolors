import { createSlice } from "@reduxjs/toolkit";

import { RootStateType } from "types";

const initialState = { isVisible: false, colorId: 0 };

const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal(state, action) {
            state.isVisible = true;
            state.colorId = action.payload;
        },
        hideModal(state) {
            state.isVisible = false;
            state.colorId = 0;
        },
    },
});
export default modal.reducer;
export const { showModal, hideModal } = modal.actions;
export const getIsModalVisible = (state: RootStateType) => state.modal.isVisible;
export const getModalColorId = (state: RootStateType) => state.modal.colorId;
