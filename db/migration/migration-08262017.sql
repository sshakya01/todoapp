\c dresselhaus_todoapp;

CREATE TABLE IF NOT EXISTS lists (
id SERIAL PRIMARY KEY,
title TEXT,
status VARCHAR(255),
category VARCHAR(255)
);
