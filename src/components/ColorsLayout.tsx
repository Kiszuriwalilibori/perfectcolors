import { Outlet } from "react-router-dom";

import Filter from "./Filter";
import Navigation from "./Navigation";

const ColorsLayout = () => {
    return (
        <>
            <Filter />
            <Outlet />
            <Navigation />
        </>
    );
};
export default ColorsLayout;
