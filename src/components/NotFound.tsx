import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #BF1932",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const NotFound = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate(-1);
    }, 3000);
    return (
        <Box sx={{ ...style, width: 300 }}>
            <h2>Ojejku! Strony o adresie "{decodeURIComponent(window.location.href)}" po prostu nie ma &#128549;</h2>
        </Box>
    );
};

export default NotFound;
