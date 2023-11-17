CREATE TABLE user_table(
    user_id int NOT NULL,
    username VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (user_id)
);

INSERT INTO user_table (
    user_id,
    username,
    email,
    first_name,
    last_name,
    password)
VALUES (
    1001,
    'briefly_l',
    'perehrestliuda@gmail.com',
    'Liudmyla',
    'Perekhrest',
    'pass_omg1')
RETURNING *;