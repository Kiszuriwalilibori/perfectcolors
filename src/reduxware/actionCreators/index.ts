import { createAction } from "@reduxjs/toolkit";
import { Colors } from "types";

export const clearColors = createAction("COLORS_CLEAR");
export const setColors = createAction<Colors>("COLORS_SET");
export const completeFetch = createAction("FETCH_COMPLETED");

export { setFilterId } from "../reducers/filterSlice";
export { showNextPage, showPreviousPage, showCertainPage } from "../reducers/pageSlice";
export { showModal, hideModal } from "../reducers/modalSlice";
