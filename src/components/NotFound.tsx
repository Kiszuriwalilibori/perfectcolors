import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";

import { boxStyle } from "styles";

const localBoxStyle = { border: "2px solid #BF1932" };

const NotFound = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate(-1);
    }, 3000);
    return (
        <Box sx={{ ...boxStyle, ...localBoxStyle }}>
            <h2>Ojejku! Strony o adresie "{decodeURIComponent(window.location.href)}" po prostu nie ma &#128549;</h2>
        </Box>
    );
};

export default NotFound;
