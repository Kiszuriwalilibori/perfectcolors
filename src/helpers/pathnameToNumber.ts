export function pathnameToNumber(str: string) {
    const nbr = +str.replace("/", "");
    return nbr;
}
