import uuid from "react-uuid";
import Stack from "@mui/material/Stack";
import loadable from "@loadable/component";

import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";

import Header from "./components/Header";

import { Paths } from "./routes";
import { fetchColors } from "hooks/fetchColors";
import { areColorsNotEmpty, getArrayOfPageNumbers } from "reduxware/selectors";
import { Home } from "./components/Home";

const Modal = loadable(() => import("./components/Modal"));
const ColorsTable = loadable(() => import("./components/ColorsTable"));
const NotFound = loadable(() => import("./components/NotFound"));
const ColorsLayout = loadable(() => import("./components/ColorsLayout"));
const Colors = loadable(() => import("./components/Colors"));

function App() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const pageNumbers = useSelector(getArrayOfPageNumbers);
    const readyToRedirect = useSelector(areColorsNotEmpty);

    useEffect(() => {
        readyToRedirect && navigate(Paths.first);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [readyToRedirect]);

    useEffect(() => {
        fetchColors(enqueueSnackbar);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Stack spacing={6} alignItems="center" justifyContent="center" marginBottom="24">
            <Header />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="/colors" element={<ColorsLayout />}>
                        <Route index element={<Colors />}></Route>
                        {pageNumbers.map(item => (
                            <Route path={item.toString()} element={<ColorsTable pageNumber={item} />} key={uuid()} />
                        ))}
                    </Route>
                </Route>
                <Route path={Paths.nopage} element={<NotFound />} />
            </Routes>
            <Modal />
        </Stack>
    );
}

export default App;
