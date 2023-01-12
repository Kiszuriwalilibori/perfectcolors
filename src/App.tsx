import uuid from "react-uuid";
import Stack from "@mui/material/Stack";

import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Modal from "./components/Modal";
import ColorsTable from "./components/ColorsTable";
import NotFound from "./components/NotFound";

import { Paths } from "./routes";
import { fetchColors } from "./hooks/fetchColors";
import { areColorsNotEmpty, getArrayOfPageNumbers } from "./reduxware/selectors";
import { Home } from "./components/Home";
import ColorsLayout from "./components/ColorsLayout";

function App() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const pageNumbers = useSelector(getArrayOfPageNumbers);
    const readyToRedirect = useSelector(areColorsNotEmpty);

    useEffect(() => {
        readyToRedirect && navigate("/colors/1");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [readyToRedirect]);

    useEffect(() => {
        //navigate(Paths.first);
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
                        {pageNumbers.map(item => (
                            <Route
                                path={item.toString()}
                                element={
                                    <>
                                        <ColorsTable pageNumber={item} />
                                    </>
                                }
                                key={uuid()}
                            />
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
