import { fieldTolabel } from "./helpers";

export const baseURL = "https://reqres.in/api/products";

export const itemsPerPage = 5;

export const colorsTableFields = ["id", "name", "year"];

export const colorsTableHeaders = colorsTableFields.map(field => fieldTolabel(field));
