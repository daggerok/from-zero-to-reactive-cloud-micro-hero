-- (2):
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- required by uuid_generate_v1
-- DROP TABLE IF EXISTS sessions;
-- CREATE TABLE sessions
-- (
--     id UUID NOT NULL DEFAULT uuid_generate_v1(),
--     name VARCHAR NOT NULL,
--     speakers VARCHAR NOT NULL,
--     CONSTRAINT sessions_pk PRIMARY KEY ( id )
-- );
DROP TABLE IF EXISTS sessions;
CREATE TABLE sessions
(
    id       UUID PRIMARY KEY,
    name     VARCHAR NOT NULL,
    speakers VARCHAR NOT NULL
);
