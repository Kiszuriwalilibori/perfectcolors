import React from "react";
import uuid from "react-uuid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { useEffect } from "react";
import { Box } from "@mui/material";
import { isEmpty } from "lodash";
import { shallowEqual, useSelector } from "react-redux";

import useDispatchAction from "hooks/useDispatchAction";

import { getColorsForGivenPage } from "reduxware/selectors";
import { colorsTableFields, colorsTableHeaders } from "settings";

const containerStyle = {
    width: "320px !important",
    margin: "0 auto",
    border: "2px solid #1565C0",
    padding: 2,
    boxShadow: 6,
    paddingBottom: "25px",
};

const tableStyle = { maxWidth: 300, margin: "0 auto" };

const rowStyle = { cursor: "pointer" };

interface Props {
    pageNumber?: number;
}

//const pr ={component="th", scope="row"}

function ColorsTable(props: Props) {
    const { pageNumber } = props;
    const colors = useSelector(getColorsForGivenPage);
    const { showModal } = useDispatchAction();
    const { showCertainPage } = useDispatchAction();
    useEffect(() => {
        showCertainPage(pageNumber);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber]);
    if (!colors || isEmpty(colors)) return null;
    console.log(colorsTableFields);
    return (
        <TableContainer sx={{ ...containerStyle }} component={Box}>
            <Table sx={{ ...tableStyle }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {colorsTableHeaders.map((label, index) => (
                            <TableCell key={uuid()} align={index === 0 ? "left" : "right"}>
                                <b>{label}</b>
                            </TableCell>
                        ))}
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
                            {colorsTableFields.map((field, index) => (
                                <TableCell
                                    key={uuid()}
                                    component={index === 0 ? "th" : undefined}
                                    scope={index === 0 ? "row" : undefined}
                                >
                                    {row[field]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default React.memo(ColorsTable);
