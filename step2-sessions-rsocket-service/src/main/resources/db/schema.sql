DROP TABLE IF EXISTS sessions;
CREATE TABLE sessions (
--  id SERIAL PRIMARY KEY,
    id UUID PRIMARY KEY,
    name VARCHAR NOT NULL,
    speakers VARCHAR NOT NULL
);
