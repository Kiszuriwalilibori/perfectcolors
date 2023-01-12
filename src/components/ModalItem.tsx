import Stack from "@mui/material/Stack";

import { ModalItem } from "types";

const ModalDataItem = (props: ModalItem) => {
    const { name, value } = props;

    return (
        <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
            <h4>{name}</h4>
            <p>{value}</p>
        </Stack>
    );
};

export default ModalDataItem;
