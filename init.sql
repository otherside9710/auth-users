CREATE DATABASE users
   WITH 
   OWNER = postgres
   ENCODING = 'UTF8'
   LC_COLLATE = 'en_US.utf8'
   LC_CTYPE = 'en_US.utf8'
   TABLESPACE = pg_default
   CONNECTION LIMIT = -1;
\c users;

CREATE TABLE credentials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL
);

INSERT INTO public.credentials(id, name, email, password, phone) VALUES (1, 'Test User', 'user@mail.com', 'dXNlcjEyMw==', '12345678');