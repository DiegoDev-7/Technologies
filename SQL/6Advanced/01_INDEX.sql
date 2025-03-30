CREATE INDEX idx_name ON USERS(name);

CREATE UNIQUE INDEX idx_name ON USERS(name);

CREATE UNIQUE INDEX idx_name ON USERS(name, surname);



DROP INDEX idx_name ON users;