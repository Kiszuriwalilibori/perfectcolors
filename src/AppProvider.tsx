import React, { ReactNode } from "react";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

import colorsReducer from "reduxware/reducers/colorsReducer";
import idReducer from "reduxware/reducers/filterSlice";
import pageSlice from "reduxware/reducers/pageSlice";
import modalReducer from "reduxware/reducers/modalSlice";

const rootReducer = combineReducers({
    colors: colorsReducer,
    id: idReducer,
    page: pageSlice,
    modal: modalReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Provider store={store}>
            <Router>
                <SnackbarProvider
                    maxSnack={3}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                >
                    {children}
                </SnackbarProvider>
            </Router>
        </Provider>
    );
};

export default AppProvider;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
