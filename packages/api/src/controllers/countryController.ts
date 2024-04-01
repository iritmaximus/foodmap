import { Database } from "sqlite";

import { ICountry } from "common";


const parseCountryResponse = (response: unknown[]): ICountry[] | undefined => {
    const countries: ICountry[] = [];
    for (const item of response) {
        if (
            typeof item === "object" && item !== null &&
            "id" in item &&
            "name" in item &&
            typeof item.id === "number" &&
            typeof item.name === "string"
        ) {
            countries.push(item as ICountry);
            continue;
        }
        console.warn("Incorrect response, cannot parse response", response);
        return;
    }

    return countries;
}

const getAll = async (db: Database): Promise<ICountry[] | undefined> => {
    const sql = `SELECT 
    c.name, c.id, COUNT(f.id) as food_count
    FROM country AS c
    JOIN food AS f ON c.id=f.country_id
    GROUP BY c.id`;

    const result = await db.all(sql);
    if (result) {
        const countries = parseCountryResponse(result);
        if (countries) {
            return countries;
        }
    }
    return;
}

const getById = (id: string) => {
    return id;
}

const add = (country: string) => {
    return country;
}

const remove = (id: string) => {
    return id;
}

export default {
    getAll
}
