import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { areColorsNotEmpty } from "../reduxware/selectors";

export const Home = () => {
    const readyToRedirect = useSelector(areColorsNotEmpty);
    const navigate = useNavigate();
    useEffect(() => {
        readyToRedirect && navigate("/1");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [readyToRedirect]);

    return null;
};
