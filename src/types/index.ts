export interface Color {
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
