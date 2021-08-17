crate table users(
    id Serial PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    googleId VARCHAR(100) NOT NULL,
);
create table einnahmen(
    id Serial PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    price numeric NOT NULL,
    date DATE NOT NULL,
    user_id integer NOT NULL references users(id) on delete cascade
);
create table ausgaben(
    id Serial PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    price numeric NOT NULL,
    date DATE NOT NULL,
    user_id integer NOT NULL references users(id) on delete cascade
)