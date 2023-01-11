import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(-1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
};

export default NotFound;
