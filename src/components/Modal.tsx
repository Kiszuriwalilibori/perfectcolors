import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import uuid from "react-uuid";

import { shallowEqual, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { Divider, Stack } from "@mui/material";

import useDispatchAction from "hooks/useDispatchAction";
import ModalDataItem from "./ModalItem";

import { getSelectedColorModalData, getIsModalVisible } from "reduxware/selectors";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function MyModal() {
    const isVisible = useSelector(getIsModalVisible, shallowEqual);
    const { hideModal } = useDispatchAction();
    const data = useSelector(getSelectedColorModalData);

    if (!data || isEmpty(data)) return null;

    return (
        <Modal open={isVisible} onClose={() => hideModal()} aria-labelledby="parent-modal-title">
            <Box sx={{ ...style, width: 300 }}>
                <h2 id="parent-modal-title">Color details</h2>
                <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={1}>
                    {data.map(item => {
                        return <ModalDataItem {...item} key={uuid()} />;
                    })}
                </Stack>
            </Box>
        </Modal>
    );
}

export default MyModal;
