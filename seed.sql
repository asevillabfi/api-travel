DROP DATABASE travel WITH (FORCE);

CREATE DATABASE travel;

\c travel


------------
-- CREATE --
------------

CREATE TABLE IF NOT EXISTS ticket (
    ticket_id serial PRIMARY KEY NOT NULL,
    destination_id integer NOT NULL,
    user_id integer NOT NULL,
    plane_id integer NOT NULL,
    date date NOT NULL
);

CREATE TABLE IF NOT EXISTS plane (
    plane_id serial PRIMARY KEY NOT NULL,
    plane_code character varying(16) NOT NULL,
    plane_airline character varying(100) NOT NULL,
    route_id integer NOT NULL
);

CREATE TABLE IF NOT EXISTS route (
    route_id serial PRIMARY KEY NOT NULL,
    route_origin character varying(25) NOT NULL,
    route_destination character varying(25) NOT NULL
);

CREATE TABLE IF NOT EXISTS destination (
    destination_id serial PRIMARY KEY NOT NULL,
    country_name character varying(100) NOT NULL,
    city_name character varying(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS roles (
    role_id serial PRIMARY KEY NOT NULL,
    role character(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY NOT NULL,
    fName character(100) NOT NULL,
    lName character(100) NOT NULL,
    age integer NOT NULL,
    username character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    role_id integer NOT NULL
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


------------
-- INSERT --
------------

INSERT INTO public.route(
    route_id, route_origin, route_destination)
VALUES (default, 'PH', 'JP'),
       (default, 'SK', 'PH'),
       (default, 'JP', 'SK');

INSERT INTO public.plane(
    plane_id, plane_code, plane_airline, route_id)
VALUES (default, 'PA100', 'Philippine Airlines', 1),
       (default, 'JA304', 'Japan Airlines', 2),
       (default, 'KA560', 'Korean Air', 3);

INSERT INTO public.roles(
    role_id, role)
VALUES (default, 'user'),
       (default, 'admin');

INSERT INTO public.users(
    user_id, fname, lname, age, username, password, role_id)
VALUES (default, 'Machi', 'Tobaye', 19, 'machiWIN', 'yuh123', 1),
       (default, 'Kyoka', 'Hibari', 18, 'user', 'pass', 1),
       (default, 'Neil', 'Edwards', 22, 'yuri', 'love', 1),
       (default, 'Alexis', 'Detoyato', 22, 'admin', 'pass', 2);

INSERT INTO public.destination(
    destination_id, country_name, city_name)
VALUES (default, 'Philippines', 'Manila'),
       (default, 'Japan', 'Tokyo'),
       (default, 'South Korea', 'Seoul');

INSERT INTO public.ticket(
    ticket_id, destination_id, user_id, plane_id, date)
VALUES (default, 1, 1, 1, '2020-6-23'),
       (default, 2, 2, 2, '2022-8-5'),
       (default, 3, 3, 3, '2023-10-13');