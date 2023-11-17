INSERT INTO city(
city_id,
city,
country_id,
last_update)
VALUES (
601,
'Hadiach',
100,
'2023-11-17 21:06:35.681381')
RETURNING *;