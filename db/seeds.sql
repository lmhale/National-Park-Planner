\c Notes_db

DROP TABLE IF EXISTS notes CASCADE;


CREATE TABLE notes (id SERIAL PRIMARY KEY, name TEXT, comment VARCHAR(250));

INSERT INTO notes
(name, comment)
VALUES
('testnote', 'I love this park');
