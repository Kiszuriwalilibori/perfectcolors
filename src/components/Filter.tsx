import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/ClearOutlined";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import useDispatchAction from "../hooks/useDispatchAction";

import { areColorsNotEmpty, getAllColorsIds } from "reduxware/selectors";

const Filter = () => {
    const [value, setValue] = useState("" as unknown as number);
    const { setFilterId } = useDispatchAction();
    const colorsLoaded = useSelector(areColorsNotEmpty);
    const allColors = useSelector(getAllColorsIds);
    const { enqueueSnackbar } = useSnackbar();

    const clearInput = useCallback(
        () => {
            setValue("" as unknown as number);
            setFilterId(null as unknown as number);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [value]
    );

    const changeHandler = useCallback(
        (ev: { target: { value: unknown | number } }) => {
            if (!isNaN(ev.target.value as unknown as number)) {
                setValue(ev.target.value as number);
                const valueAsNumber = +(ev.target.value as unknown as number);

                if (allColors.includes(valueAsNumber)) {
                    setFilterId(valueAsNumber);
                } else {
                    clearInput();
                    enqueueSnackbar(
                        `Requested Id ${valueAsNumber} is out of scope  ${allColors[0]} -  ${allColors.at(
                            -1
                        )}  . Try with another Id`,
                        {
                            variant: "warning",
                        }
                    );
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [value]
    );
    if (!colorsLoaded) return null;
    return (
        <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
            <TextField
                id="standard-basic"
                disabled={!colorsLoaded}
                value={value}
                onChange={changeHandler}
                label="Wpisz Id"
                variant="standard"
            />
            <Button disabled={!value} onClick={clearInput}>
                <ClearIcon />
            </Button>
        </Stack>
    );
};
export default Filter;
