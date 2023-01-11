import { store } from "../AppProvider";
import axios from "axios";
import { baseURL } from "../settings";
import { Colors, Color } from "../types";
import { SnackbarMessage, OptionsObject, SnackbarKey } from "notistack";

let endpoints: string[] = [];

export const getAll = (messager: Function) => {
    const results: Colors = [];
    axios
        .all(endpoints.map(endpoint => axios.get(endpoint)))
        .then(data => {
            data.forEach((item: { data: { data: Color } }) => {
                const res = item.data.data as Color;
                results.push(res);
            });
        })
        .then(() => {
            results.length && store.dispatch({ type: "COLORS_SET", payload: results });
            messager(`Fetched succesfully ${results.length} colors`, {
                variant: "success",
            });
        })
        .catch(err => {
            if (err.response) {
                messager(`Error. The client was given an error response (5xx, 4xx)  ${err.message} `, {
                    variant: "error",
                });
            } else if (err.request) {
                messager(
                    `Error. The client never received a response, and the request was never left  ${err.message} `,
                    {
                        variant: "error",
                    }
                );
            } else {
                messager(`Error.  ${err.message} `, {
                    variant: "error",
                });
            }
        });
};

export const fetchColors = (
    messager: (message: SnackbarMessage, options?: OptionsObject | undefined) => SnackbarKey
) => {
    messager("Fetching data initiated", { variant: "info" });
    axios
        .get(baseURL)
        .then(data => {
            const total = data.data.total;
            for (let index = 1; index <= total; index++) {
                endpoints.push(`${baseURL}/${index}`);
            }
        })
        .then(() => getAll(messager))
        .catch(err => {
            messager(`Error. Can not get array of endpoints: ${err.message}`, {
                variant: "error",
            });
        });
};
