CREATE TABLE IF NOT EXISTS country (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS food (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    country_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (country_id)
        REFERENCES country (id)
            ON DELETE CASCADE
            ON UPDATE NO ACTION,
    FOREIGN KEY (user_id)
        REFERENCES user (id)
            ON DELETE CASCADE
            ON UPDATE NO ACTION
);
