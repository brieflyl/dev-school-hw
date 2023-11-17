UPDATE city
SET city = 'Dnipro',
    last_update = '2023-11-17 21:09:50.591408'
WHERE city = 'Hadiach'
RETURNING *;