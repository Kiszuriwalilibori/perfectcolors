import { capitalize } from "lodash";

export const fieldTolabel = (x: string) => {
    const result = capitalize(x).replaceAll("_", " ");

    return result;
};
