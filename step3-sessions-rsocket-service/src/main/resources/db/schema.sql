CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- required by uuid_generate_v1

DROP TABLE IF EXISTS sessions;
CREATE TABLE sessions (
-- --  id SERIAL PRIMARY KEY,
--     id UUID PRIMARY KEY,
    -- now we must relay on PG UUID auto gen. functionality!
    id UUID NOT NULL DEFAULT uuid_generate_v1(),
    name VARCHAR NOT NULL,
    speakers VARCHAR NOT NULL,
    CONSTRAINT sessions_pk PRIMARY KEY ( id )
);
