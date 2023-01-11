import uuid from "react-uuid";
import Stack from "@mui/material/Stack";

import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";

import NumericalInput from "./components/NumericalInput";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ColorsTable from "./components/ColorsTable";
import NotFound from "./components/NotFound";

import { Paths } from "./routes";
import { fetchColors } from "./hooks/fetchColors";
import { getArrayOfPageNumbers } from "./reduxware/selectors";
import { numberToPathname } from "./helpers";

function App() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const pageNumbers = useSelector(getArrayOfPageNumbers);

    useEffect(() => {
        navigate(Paths.first);
        fetchColors(enqueueSnackbar);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Stack spacing={6} alignItems="center" justifyContent="center" marginBottom="24">
            <Header />
            <NumericalInput />
            <Routes>
                {pageNumbers.map(item => (
                    <Route path={numberToPathname(item)} element={<ColorsTable pageNumber={item} />} key={uuid()} />
                ))}
                <Route path={Paths.nopage} element={<NotFound />} />
            </Routes>
            <Navigation />
            <Modal />
        </Stack>
    );
}

export default App;