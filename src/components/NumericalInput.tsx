import TextField from "@mui/material/TextField";

import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

import useDispatchAction from "../hooks/useDispatchAction";

import { areColorsNotEmpty } from "../reduxware/selectors";

const NumericalInput = () => {
    const [value, setValue] = useState("" as unknown as number);
    const { setFilterId } = useDispatchAction();
    const colorsLoaded = useSelector(areColorsNotEmpty);

    const changeHandler = useCallback(
        (ev: { target: { value: unknown | number } }) => {
            if (!isNaN(ev.target.value as unknown as number)) {
                setValue(ev.target.value as number);
                setFilterId(+(ev.target.value as number));
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [value]
    );

    return (
        <TextField
            id="standard-basic"
            disabled={!colorsLoaded}
            value={value}
            onChange={changeHandler}
            label="Wpisz Id"
            variant="standard"
        />
    );
};
export default NumericalInput;
