import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Box } from "@mui/material";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

import useDispatchAction from "../hooks/useDispatchAction";

import { getColorsForGivenPage } from "../reduxware/selectors";
import { useEffect } from "react";

const containerStyle = {
    width: "320px !important",
    margin: "0 auto",
    border: "2px solid #000",
    padding: 2,
    boxShadow: 24,
    paddingBottom: "25px",
};

const tableStyle = { maxWidth: 300, margin: "0 auto" };

const rowStyle = { cursor: "pointer" };

interface Props {
    pageNumber?: number;
}

export default function ColorsTable(props: Props) {
    const { pageNumber } = props;
    console.log("propstable renders", pageNumber);
    const colors = useSelector(getColorsForGivenPage);
    const { showModal } = useDispatchAction();
    const { showCertainPage } = useDispatchAction();
    useEffect(() => {
        showCertainPage(pageNumber);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber]);
    if (!colors || isEmpty(colors)) return null;

    return (
        <TableContainer sx={{ ...containerStyle }} component={Box}>
            <Table sx={{ ...tableStyle }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {colors.map(row => (
                        <TableRow
                            key={row.name}
                            sx={{ background: row.color, ...rowStyle }}
                            onClick={() => {
                                showModal(row.id);
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.year}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
