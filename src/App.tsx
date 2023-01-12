import uuid from "react-uuid";
import Stack from "@mui/material/Stack";

import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";

import Filter from "./components/Filter";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ColorsTable from "./components/ColorsTable";
import NotFound from "./components/NotFound";

import { Paths } from "./routes";
import { fetchColors } from "./hooks/fetchColors";
import { getArrayOfPageNumbers } from "./reduxware/selectors";
import { numberToPathname } from "./helpers";
import { Home } from "./components/Home";

function App() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const pageNumbers = useSelector(getArrayOfPageNumbers);

    useEffect(() => {
        navigate(Paths.first);
        fetchColors(enqueueSnackbar);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(pageNumbers);
    return (
        <Stack spacing={6} alignItems="center" justifyContent="center" marginBottom="24">
            <Header />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    {pageNumbers.map(item => (
                        <Route
                            path={item.toString()}
                            element={
                                <>
                                    <Filter />
                                    <ColorsTable pageNumber={item} />
                                    <Navigation />
                                </>
                            }
                            key={uuid()}
                        />
                    ))}
                </Route>
                <Route path={Paths.nopage} element={<NotFound />} />
            </Routes>
            <Modal />
        </Stack>
    );
}

export default App;
