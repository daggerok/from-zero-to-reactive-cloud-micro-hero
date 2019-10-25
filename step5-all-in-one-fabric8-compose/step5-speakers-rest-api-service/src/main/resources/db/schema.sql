-- CREATE TABLE speakers
-- (
--     id       UUID PRIMARY KEY,
--     name     VARCHAR NOT NULL
-- );
-- (2):
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- required by uuid_generate_v1
DROP TABLE IF EXISTS speakers;
CREATE TABLE speakers
(
    id   UUID    NOT NULL DEFAULT uuid_generate_v1(),
    name VARCHAR NOT NULL,
    CONSTRAINT speakers_pk PRIMARY KEY (id)
);
