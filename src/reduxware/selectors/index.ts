import { createSelector } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";

import { fieldTolabel } from "../../helpers";
import { numberToPathname } from "../../helpers/numberToPathname";

import { getAllColors } from "../reducers/colorsReducer";
import { getId } from "../reducers/filterSlice";
import { getCurrentPageNumber } from "../reducers/pageSlice";
import { getModalColorId, getIsModalVisible } from "../reducers/modalSlice";
import { Colors, ModalItem } from "../../types";
import { itemsPerPage } from "../../settings";

function setFilteredColors(ary: Colors, id: number) {
    if (!id) {
        return ary;
    } else {
        const result = ary.filter(item => item.id === id);
        return result;
    }
}

const setAreColorsNotEmpty = (ary: Colors): boolean => {
    return ary.length ? true : false;
};

const setNumberOfPages = (ary: Colors): number => {
    return Math.ceil(ary.length / itemsPerPage);
};

function setIsPreviousButtonVisible(currentIndex: number) {
    if (currentIndex > 1) {
        return true;
    } else {
        return false;
    }
}

export const setIsNextButtonVisible = (numberOfPages: number, currentIndex: number) => {
    if (currentIndex < numberOfPages) {
        return true;
    } else {
        return false;
    }
};

const setSelectedColorModalData = (ary: Colors, id: number) => {
    const color = ary.find(item => item.id === id);
    if (color) {
        const result: ModalItem[] = [];
        const x = Object.entries(color);

        x.forEach(item => {
            item[0] = fieldTolabel(item[0]);
            const obj = { name: item[0], value: item[1] };
            result.push(obj);
        });
        return result;
    } else {
        return undefined;
    }
};

const setColorsForGivenPage = (ary: Colors, numberOfPages: number, currentPageIndex: number) => {
    if (!isEmpty(ary)) {
        let index;
        const result = [];
        const length = ary.length;

        if (currentPageIndex > numberOfPages) {
            index = numberOfPages;
        } else if (currentPageIndex < 1) {
            index = 1;
        } else {
            index = currentPageIndex;
        }
        const firstItem = (index - 1) * itemsPerPage;

        for (let x = firstItem; x <= firstItem + itemsPerPage - 1 && x < length; x++) {
            ary[x] && result.push(ary[x]);
        }

        return result;
    }
};

export const setArrayOfPageNumbers = (x: number) => {
    const result: number[] = [];
    for (let i = 1; i <= x; i++) {
        result.push(i);
    }
    return result;
};

export const setAllColorsIds = (ary: Colors) => {
    const result: number[] = [];
    ary.forEach(item => result.push(item.id));

    return result;
};

export const getFilteredColors = createSelector(getAllColors, getId, setFilteredColors);

export const areColorsNotEmpty = createSelector(getAllColors, setAreColorsNotEmpty);

export const getNumberOfPages = createSelector(getFilteredColors, setNumberOfPages);

export const getIsPreviousButtonVisible = createSelector(getCurrentPageNumber, setIsPreviousButtonVisible);

export const getIsNextButtonVisible = createSelector(getNumberOfPages, getCurrentPageNumber, setIsNextButtonVisible);

export const getSelectedColorModalData = createSelector(getAllColors, getModalColorId, setSelectedColorModalData);

export const getColorsForGivenPage = createSelector(
    getFilteredColors,
    getNumberOfPages,
    getCurrentPageNumber,
    setColorsForGivenPage
);

export const getArrayOfPageNumbers = createSelector(getNumberOfPages, setArrayOfPageNumbers);
export const getAllColorsIds = createSelector(getAllColors, setAllColorsIds);

export { getCurrentPageNumber };
export { getIsModalVisible };
export { getAllColors };
