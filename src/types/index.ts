type C = {
    [key: string]: number | string;
};
export interface Color extends C {
    id: number;
    name: string;
    year: number;
    color: string;
    panton_value: string;
}
export type Colors = Color[];

export interface ModalItem {
    name: string;
    value: string | number;
}

export type PathKeys = "main" | "nopage" | "first" | "previous";

export { RootStateType } from "../AppProvider";
