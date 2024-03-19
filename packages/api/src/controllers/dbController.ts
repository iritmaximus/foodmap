import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import fs from "fs";
import path from "path";

import config from "../utils/config";


const parseRelativePath = (relativePath: string): string => {
    const filePath = path.resolve(__dirname, relativePath);
    // console.debug("Parsed", relativePath, "to", filePath);

    return filePath;

}

export const openDb = async (dbFilePath: string): Promise<Database | undefined> => {
    const filePath = parseRelativePath(dbFilePath);
    const db = await open({
        filename: filePath,
        driver: sqlite3.cached.Database
    });

    if (db) {
        return db;
    }

    console.error("Database could not be opened with path", dbFilePath);
    return;
}

const execFileDb = async (filename: string, db: Database) => {
    const filePath = parseRelativePath(filename);

    const query = fs.readFileSync(filePath, "utf-8").toString();
    // console.debug("Executing file", filePath);

    await db.exec(query);
}

export const resetDb = async (db: Database) => {
    await dropTables(db);
    await initTables(db);
    await seedDb(db);
}

export const dropTables = async (db: Database) => {
    console.debug("Tables dropped");
    await execFileDb(config.DROP_TABLES_PATH, db);
}

export const initTables = async (db: Database) => {
    console.debug("Tables created");
    await execFileDb(config.INIT_TABLES_PATH, db);
}

export const seedDb = async (db: Database) => {
    console.debug("Database seeded");
    await execFileDb(config.SEED_PATH, db);
}



export default {
    openDb,
    resetDb,
    dropTables,
    initTables,
    seedDb
}
