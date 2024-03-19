import "dotenv/config";


export const PORT = process.env.PORT && parseInt(process.env.PORT) ? parseInt(process.env.PORT) : 5000;
export const DROP_TABLES_PATH: string = process.env.DROP_TABLES_PATH ? process.env.DROP_TABLES_PATH : "../sql/drop-tables.sql";
export const INIT_TABLES_PATH: string = process.env.INIT_TABLES_PATH ? process.env.INIT_TABLES_PATH : "../sql/init-tables.sql";
export const SEED_PATH: string = process.env.SEED_PATH ? process.env.SEED_PATH : "../sql/seed.sql";
export const DB_PATH: string = process.env.DB_PATH ? process.env.DB_PATH : "../sql/sqlite-dev.db";



export default {
    PORT,
    DROP_TABLES_PATH,
    INIT_TABLES_PATH,
    SEED_PATH,
    DB_PATH
}
