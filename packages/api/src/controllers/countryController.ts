import { Database } from "sqlite";

const getAll = async (db: Database) => {
    const sql = `
    SELECT c.name AS 'country', f.name AS 'food', f.description 
    FROM country AS c
    FULL JOIN food AS f ON f.country_id=c.id`;

    const result = await db.all(sql);
    if (result) {
        console.info("Response:", result);
        return result;
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
