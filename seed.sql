DROP DATABASE travel WITH (FORCE);

CREATE DATABASE travel;

\c travel


------------
-- CREATE --
------------

CREATE TABLE IF NOT EXISTS ticket (
    ticket_id integer PRIMARY KEY NOT NULL,
    destination_id integer NOT NULL,
    user_id integer NOT NULL,
    fName character varying(100) NOT NULL,
    lName character varying(100) NOT NULL,
    plane_id integer NOT NULL,
    date date NOT NULL
);

CREATE TABLE IF NOT EXISTS plane (
    plane_id integer PRIMARY KEY NOT NULL,
    plane_code character varying(16) NOT NULL,
    plane_airline character varying(100) NOT NULL,
    route_id integer NOT NULL
);

CREATE TABLE IF NOT EXISTS route (
    route_id integer PRIMARY KEY NOT NULL,
    route_origin character varying(25) NOT NULL,
    route_destination character varying(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS destination (
    destination_id integer PRIMARY KEY NOT NULL,
    country_name character varying(100) NOT NULL,
    city_name character varying(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS roles (
    role_id integer PRIMARY KEY NOT NULL,
    role character(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    user_id integer PRIMARY KEY NOT NULL,
    fName character(100) NOT NULL,
    lName character(100) NOT NULL,
    age integer NOT NULL,
    username character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    role_id integer NOT NULL,
    role character(100) NOT NULL
);


-----------------
-- FOREIGN KEY --
-----------------

ALTER TABLE ONLY public.users
    ADD CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES public.roles(role_id);

ALTER TABLE ONLY public.plane
    ADD CONSTRAINT fk_route_id FOREIGN KEY (route_id) REFERENCES public.route(route_id);

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT fk_destination_id FOREIGN KEY (destination_id) REFERENCES public.destination(destination_id);

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES public.users(user_id);

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT fk_plane_id FOREIGN KEY (plane_id) REFERENCES public.plane(plane_id);